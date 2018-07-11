export const musicSound = () => {
  let audioCtx = null;
  let audioBuffer = null;
  let bufferSource = null;
  return {
    play: async (buffer) => {
      if (bufferSource && bufferSource.buffer.length) {
        bufferSource.stop();
        bufferSource.disconnect();
      }
      audioCtx = new AudioContext();
      audioBuffer = await audioCtx.decodeAudioData(buffer);
      bufferSource = audioCtx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.connect(audioCtx.destination);
      bufferSource.start();
      return bufferSource;
    },
    stop: () => {}
  }
}

export default musicSound();
