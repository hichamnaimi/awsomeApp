export const musicSound = () => {
  let audioCtx = null;
  let buffer = null;
  let audioBuffer = null;
  let bufferSource = null;
  return {
    play: async (buffer) => {
      audioCtx = new AudioContext();
      buffer = buffer;
      audioBuffer = await audioCtx.decodeAudioData(buffer);
      bufferSource = audioCtx.createBufferSource();
      bufferSource.buffer = audioBuffer;
      bufferSource.connect(audioCtx.destination);
      bufferSource.start();
    },
    stop: () => {}
  }
}

export default musicSound();
