import { playMusicSound } from '../helpers/playMusicSound';
import {
  ADD_MUSIC,
  REMOVE_MUSIC,
  PLAY_PLAYLIST_MUSIC
} from '../actionTypes/musicPlaylist';


export const addMusic = (music) => ({
  type: ADD_MUSIC,
  payload: music
});

export const removeMusic = (id) => ({
  type: REMOVE_MUSIC,
  payload: id
});

const changeOrderOfPlayedMusic = (id) => {
  return {
    type: PLAY_PLAYLIST_MUSIC,
    payload: id
  }
}

export const playPlayistMusic = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:4000/music/${id}`)
      .then(result => result.arrayBuffer())
      .then((buffer) => {
        playMusicSound(buffer);
        dispatch(changeOrderOfPlayedMusic(id));
      });
  }
};