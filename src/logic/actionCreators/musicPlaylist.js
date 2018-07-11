import musicSound from '../helpers/musicSound';
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
  return (dispatch, getState) => {
    const { musicPlaylist } = getState();
    dispatch(changeOrderOfPlayedMusic(id));
    const afterEachMusic = (nextMusic) => dispatch(changeOrderOfPlayedMusic(nextMusic.value.id));
    musicSound.autoPlayMusic(id, musicPlaylist, afterEachMusic);
  }
};