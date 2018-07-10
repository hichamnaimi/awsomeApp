export const musicSound = () => {
  let audioCtx = null;
  let savedBuffer = null;
  let audioBuffer = null;
  let bufferSource = null;
  return {
    play: async (buffer) => {
      if (bufferSource && bufferSource.buffer.length) {
        bufferSource.stop();
      }
      audioCtx = new AudioContext();
      savedBuffer = buffer;
      audioBuffer = await audioCtx.decodeAudioData(buffer);
      bufferSource = audioCtx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.buffer.length
      bufferSource.connect(audioCtx.destination);
      bufferSource.start();
    },
    stop: () => {}
  }
}

export default musicSound();
