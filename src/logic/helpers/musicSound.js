export const musicSound = (() => {
  let audioCtx = null;
  let audioBuffer = null;
  let bufferSource = null;
  return {
    play: async (buffer) => {
      musicSound.stop();
      audioCtx = new AudioContext();
      audioBuffer = await audioCtx.decodeAudioData(buffer);
      bufferSource = audioCtx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.connect(audioCtx.destination);
      bufferSource.start();
      return bufferSource;
    },
    stop: () => {
      if (bufferSource && bufferSource.buffer.length) {
        bufferSource.stop();
        bufferSource.disconnect();
      }
    },
    autoPlayMusic: (currentMusicId, musicPlaylist, afterEachMusicCallback) => {
      const restOfPlaylistMusic = musicPlaylist.filter(music => music.id !== currentMusicId);
      const restOfPlaylistMusicIterator = restOfPlaylistMusic.values();
      const _autoPlayMusic = (url = `http://localhost:4000/music/${currentMusicId}`) => {
        return fetch(url)
        .then(result => result.arrayBuffer())
        .then((buffer) => musicSound.play(buffer))
        .then(bufferSource => {
          const nextMusic = restOfPlaylistMusicIterator.next();
          bufferSource.onended = () => {
            if (!nextMusic.done) {
              afterEachMusicCallback(nextMusic);
              _autoPlayMusic(`http://localhost:4000/music/${nextMusic.value.id}`);
            }
          }
        });
      }
      _autoPlayMusic();
    }
  }
})();

export default musicSound;
