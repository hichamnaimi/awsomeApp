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
    const restOfPlaylistMusic = musicPlaylist.filter(music => music.id !== id);
    const restOfPlaylistMusicIterator = restOfPlaylistMusic.values();
    const autoPlayMusic = async (url = `http://localhost:4000/music/${id}`) => {
      return fetch(url)
      .then(result => result.arrayBuffer())
      .then((buffer) => musicSound.play(buffer))
      .then(bufferSource => {
        const nextMusic = restOfPlaylistMusicIterator.next();
        bufferSource.onended = () => {
          if (!nextMusic.done) {
            dispatch(changeOrderOfPlayedMusic(nextMusic.value.id));
            autoPlayMusic(`http://localhost:4000/music/${nextMusic.value.id}`);
          }
        }
      });
    }
    autoPlayMusic();
  }
};