import fetch from 'cross-fetch';
import {
  FETCH_MUSIC,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE,
} from '../../actionTypes/music/musicList';


const fetchMusic = () => ({
  type: FETCH_MUSIC
});

const fetchMusicSuccess = (data) => ({
  type: FETCH_MUSIC_SUCCESS,
  payload: data
});

const fetchMusicFailure = (error) => ({
  type: FETCH_MUSIC_FAILURE,
  payload: error
});

const performFetchMusic = () => {
  return (dispatch) => {
    return fetch('http://localhost:4000/music')
      .then(res => res.json())
      .then(data => dispatch(fetchMusicSuccess(data)))
      .catch(error => dispatch(fetchMusicFailure(error)));
  }
}

export const fetchMusicIfNeeds = () => {
  return (dispatch, getState) => {
    const { musicList } = getState();
    if (!musicList.items.length) {
      dispatch(fetchMusic());
      return dispatch(performFetchMusic());
    }
    return musicList;
  }
}