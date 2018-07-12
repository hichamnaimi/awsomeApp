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
    autoPlayMusic: (currentMusicId, musicPlaylist, beforeEachMusicCallback, afterEachMusicCallback) => {
      const restOfPlaylistMusic = musicPlaylist.filter(music => music.id !== currentMusicId);
      const restOfPlaylistMusicIterator = restOfPlaylistMusic.values();
      const _autoPlayMusic = (currentMusicId, source) => {
        return fetch(source)
        .then(result => result.arrayBuffer())
        .then((buffer) => {
          beforeEachMusicCallback(currentMusicId);
          return musicSound.play(buffer);
        })
        .then(bufferSource => {
          const nextMusic = restOfPlaylistMusicIterator.next();
          bufferSource.onended = () => {
            if (!nextMusic.done) {
              afterEachMusicCallback(currentMusicId);
              _autoPlayMusic(nextMusic.value.id, `http://localhost:4000/music/${nextMusic.value.id}`);
            }
          };
        });
      };
      // begin
      _autoPlayMusic(currentMusicId, `http://localhost:4000/music/${currentMusicId}`);
    }
  }
})();

export default musicSound;
