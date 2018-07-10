import {
  ADD_MUSIC,
  REMOVE_MUSIC,
  PLAY_PLAYLIST_MUSIC
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

const playPlaylistMusic = (playlistMusic, id) => {
  const concernedMusic = playlistMusic.find((music) => music.id === id);
  const filteredPlaylistMusic = playlistMusic.filter((music) => music.id !== id);
  filteredPlaylistMusic.unshift(concernedMusic);
  return filteredPlaylistMusic;
};

const initialState = localStorage.getItem("playlist") ? JSON.parse(localStorage.getItem("playlist")) : [];

const musicPlaylistReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MUSIC:
      return addMusicIfUnique(state, action.payload);
    case REMOVE_MUSIC:
      return removeMusicById(state, action.payload);
    case PLAY_PLAYLIST_MUSIC:
      return playPlaylistMusic(state, action.payload);
    default:
      return state;
  }
}

export default musicPlaylistReducer;
