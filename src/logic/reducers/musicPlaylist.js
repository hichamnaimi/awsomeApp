import {
  ADD_MUSIC
} from '../actionTypes/musicPlaylist';

const musicPlaylistReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_MUSIC:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default musicPlaylistReducer;

