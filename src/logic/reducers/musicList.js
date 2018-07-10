import {
  FETCH_MUSIC,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE
} from '../actionTypes/musicList';

import { fetchMusic } from '../actionCreators/musicList';

const initialState = {
  isFetching: false,
  isError: false,
  items: []
}

const musicListReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MUSIC:
      return { ...state, isFetching: true };
    case FETCH_MUSIC_SUCCESS:
      return { ...state, isFetching: false, isError: false, items: action.payload }
    case FETCH_MUSIC_FAILURE:
      return { ...state, isFetching: false, isError: action.payload };
    default:
      return state;
  }
}

export default musicListReducer;

