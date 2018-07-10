import fetch from 'cross-fetch';
import { playMusicSound } from '../helpers/playMusicSound';
import {
  FETCH_MUSIC,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE,
  PLAY_LIST_MUSIC
} from '../actionTypes/musicList';


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

const changeOrderOfPlayedMusic = (id) => {
  return {
    type: PLAY_LIST_MUSIC,
    payload: id
  }
}

export const playListMusic = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:4000/music/${id}`)
      .then(result => result.arrayBuffer())
      .then((buffer) => {
        playMusicSound(buffer);
        dispatch(changeOrderOfPlayedMusic(id));
      });
  }
};