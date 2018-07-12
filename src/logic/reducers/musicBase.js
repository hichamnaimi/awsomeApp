/*
  Common music reducer
*/

// Turn on/off a music in a giving list
const toggleHighlightMusic = (musicList, id, isPlaying) => {
  const musicToToggle = musicList.findIndex((music) => music.id === id);
  if (musicToToggle !== -1) {
    return [
      ...musicList.slice(0,musicToToggle),
      {...musicList[musicToToggle], isPlaying },
      ...musicList.slice(musicToToggle + 1)
    ];
  }
  return musicList;
};

// Turn off any (active) music in a given list
const downlightAnyPlayingMusic = (musicList, id) => {
  const activeMusicIndex = musicList.findIndex((music) => music.isPlaying);
  if (activeMusicIndex !== -1) {
    return [
      ...musicList.slice(0,activeMusicIndex),
      {...musicList[activeMusicIndex], isPlaying: false },
      ...musicList.slice(activeMusicIndex + 1)
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