import {
  FETCH_MUSIC,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE,
  PLAY_LIST_MUSIC
} from '../actionTypes/musicList';

const initialState = {
  isFetching: false,
  isError: false,
  items: []
}

const playListMusic = (listMusic, id) => {
  console.log('@@@@ ID ID ID :: ', id);
  const concernedMusic = listMusic.find((music) => music.id === id);
  const filteredMusicList = listMusic.filter((music) => music.id !== id);
  filteredMusicList.unshift(concernedMusic);
  return filteredMusicList;
};

const musicListReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MUSIC:
      return { ...state, isFetching: true };
    case FETCH_MUSIC_SUCCESS:
      return { ...state, isFetching: false, isError: false, items: action.payload }
    case FETCH_MUSIC_FAILURE:
      return { ...state, isFetching: false, isError: action.payload };
    case PLAY_LIST_MUSIC:
      return { ...state, items: playListMusic([...state.items], action.payload)};
      break;
    default:
      return state;
  }
}

export default musicListReducer;

