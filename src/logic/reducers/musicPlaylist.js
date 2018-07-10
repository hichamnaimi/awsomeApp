import {
  ADD_MUSIC, REMOVE_MUSIC
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

const musicPlaylistReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_MUSIC:
      return addMusicIfUnique(state, action.payload);
      case REMOVE_MUSIC:
      return removeMusicById(state, action.payload);
    default:
      return state;
  }
}

export default musicPlaylistReducer;
