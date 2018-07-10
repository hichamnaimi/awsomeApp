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

export const playPlayistMusic = (id) => {
  return {
    type: PLAY_PLAYLIST_MUSIC,
    payload: id
  }
};