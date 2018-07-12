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

export const removeMusic = (id) => ({
  type: REMOVE_MUSIC,
  payload: id
});

const changePlayingMusicOrder = (id) => {
  return {
    type: CHANGE_PLAYING_MUSIC_ORDER,
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
    const currentPlayingMusic = musicPlaylist.find(music => music.isPlaying);
    if (currentPlayingMusic) {
      dispatch(highlightPlayingMusic(currentPlayingMusic.id, false));
    }
    dispatch(changePlayingMusicOrder(id));
    const beforeEachMusic = (nextMusicId) => dispatch(highlightPlayingMusic(nextMusicId, true));
    const afterEachMusic = (previousMusicId) => dispatch(highlightPlayingMusic(previousMusicId, false));
    musicSound.autoPlayMusic(id, musicPlaylist, beforeEachMusic, afterEachMusic);
  }
};