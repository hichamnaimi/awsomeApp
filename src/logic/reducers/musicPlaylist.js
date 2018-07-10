import {
  ADD_MUSIC
} from '../actionTypes/musicPlaylist';

const addMusicIfUnique = (state, musicToAdd) => {
  const musicAlreadyExists = state.find((music) => music.id === musicToAdd.id);
  if (!musicAlreadyExists) return [...state, musicToAdd];
  return state;
};

const musicPlaylistReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_MUSIC:
      return addMusicIfUnique(state, action.payload);
    default:
      return state;
  }
}

export default musicPlaylistReducer;
