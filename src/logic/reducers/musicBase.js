/*
  Common music reducer
*/

// Turn on/off a music in a giving list
const toggleHighlightMusic = (musicList, id, isPlaying) => {
  const concernedMusicIndex = musicList.findIndex((music) => music.id === id);
  if (concernedMusicIndex !== -1) {
    return [
      ...musicList.slice(0,concernedMusicIndex),
      {...musicList[concernedMusicIndex], isPlaying },
      ...musicList.slice(concernedMusicIndex + 1)
    ];
  }
  return musicList;
};

// Turn off any (active) music in a given list
const downlightAnyPlayingMusic = (musicList, id) => {
  const concernedMusicIndex = musicList.findIndex((music) => music.id === id);
  if (concernedMusicIndex !== -1) {
    return [
      ...musicList.slice(0,concernedMusicIndex),
      {...musicList[concernedMusicIndex], isPlaying: false },
      ...musicList.slice(concernedMusicIndex + 1)
    ];
  }
  return musicList;
};

// Set playing music to the top of a given list
const changePlayingMusicOrder = (musicList, id) => {
  const concernedMusic = musicList.find((music) => music.id === id);
  const filteredMusicList = musicList.filter((music) => music.id !== id);
  return concernedMusic ? [concernedMusic, ...filteredMusicList] : musicList;
};

export default {
  toggleHighlightMusic,
  changePlayingMusicOrder,
  downlightAnyPlayingMusic
}