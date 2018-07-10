export const playMusicSound = async (buffer) => {
  const audioCtx = new AudioContext();
  const audioBuffer = await audioCtx.decodeAudioData(buffer);
  const bufferSource = audioCtx.createBufferSource();
  bufferSource.buffer = audioBuffer;
  bufferSource.connect(audioCtx.destination);
  bufferSource.start();
}
