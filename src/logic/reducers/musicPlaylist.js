import {
  ADD_MUSIC,
  REMOVE_MUSIC,
  CHANGE_PLAYING_MUSIC_ORDER,
  HIGHTLIGHT_PLAYING_MUSIC
} from '../actionTypes/musicPlaylist';

const addMusicIfUnique = (state, musicToAdd) => {
  const musicAlreadyExists = state.find((music) => music.id === musicToAdd.id);
  if (!musicAlreadyExists) return [...state, musicToAdd];
  return state;
};

const removeMusicById = (state, id) => {
  const filteredState = state.filter((music) => music.id !== id);
  return filteredState;
};

const changePlayingMusicOrder = (playlistMusic, id) => {
  const concernedMusic = playlistMusic.find((music) => music.id === id);
  const filteredPlaylistMusic = playlistMusic.filter((music) => music.id !== id);
  return concernedMusic ? [concernedMusic, ...filteredPlaylistMusic] : playlistMusic;
};

const hightlightPlayingMusic = (playlistMusic, { id, isPlaying }) => {
  const concernedMusicIndex = playlistMusic.findIndex((music) => music.id === id);
  if (concernedMusicIndex !== -1) {
    return [
      ...playlistMusic.slice(0,concernedMusicIndex),
      {...playlistMusic[concernedMusicIndex], isPlaying },
      ...playlistMusic.slice(concernedMusicIndex + 1)
    ];
  }
  return playlistMusic;
};

const initialState = localStorage.getItem("playlist") ? JSON.parse(localStorage.getItem("playlist")) : [];

const musicPlaylistReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MUSIC:
      return addMusicIfUnique(state, action.payload);
    case REMOVE_MUSIC:
      return removeMusicById(state, action.payload);
    case CHANGE_PLAYING_MUSIC_ORDER:
      return changePlayingMusicOrder(state, action.payload);
    case HIGHTLIGHT_PLAYING_MUSIC:
      return hightlightPlayingMusic(state, action.payload);
    default:
      return state;
  }
}

export default musicPlaylistReducer;
