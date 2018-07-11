import musicSound from '../helpers/musicSound';
import {
  ADD_MUSIC,
  REMOVE_MUSIC,
  PLAY_PLAYLIST_MUSIC,
  PLAY_MUSIC
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

const highlightPlayingMusic = (id, isPlaying) => ({
  type: HIGHTLIGHT_PLAYING_MUSIC,
  payload: { id, isPlaying }
});

export const playPlayistMusic = (id) => {
  return (dispatch, getState) => {
    const { musicPlaylist } = getState();
    dispatch(changeOrderOfPlayedMusic(id));
    const beforeEachMusic = (nextMusic) => dispatch(highlightPlayingMusic(nextMusic.id, true));
    const afterEachMusic = (previousMusic) => dispatch(highlightPlayingMusic(previousMusic.id, false));
    musicSound.autoPlayMusic(id, musicPlaylist, beforeEachMusic, afterEachMusic);
  }
};