import musicSound from '../helpers/musicSound';
import { ADD_MUSIC, REMOVE_MUSIC } from '../actionTypes/musicPlaylist';

export const addMusic = (music) => ({
  type: ADD_MUSIC,
  payload: music
});

export const removeMusic = (id) => {
  musicSound.stop();
  return {
    type: REMOVE_MUSIC,
    payload: id
  }
};