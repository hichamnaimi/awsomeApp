import musicSound from '../helpers/musicSound';
import {
  ADD_MUSIC,
  REMOVE_MUSIC,
  CHANGE_PLAYING_MUSIC_ORDER,
  PLAY_MUSIC,
  HIGHTLIGHT_PLAYING_MUSIC
} from '../actionTypes/musicPlaylist';

let currentMusicId = null;

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