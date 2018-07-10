import {
  ADD_MUSIC
} from '../actionTypes/musicPlaylist';


export const addMusic = (music) => ({
  type: ADD_MUSIC,
  payload: music
});