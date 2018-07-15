/*
  Common music reducer
*/

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

const downlightAnyPlayingMusic = (musicList) => {
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

const changePlayingMusicOrder = (musicList, id) => {
  const concernedMusic = musicList.find((music) => music.id === id);
  const filteredMusicList = musicList.filter((music) => music.id !== id);
  return concernedMusic ? [concernedMusic, ...filteredMusicList] : musicList;
};

const stopPlayingMusic = (musicList, id) => {
  const activeMusicIndex = musicList.findIndex((music) => music.id === id && music.isPlaying);
  if (activeMusicIndex !== -1) {
    return [
      ...musicList.slice(0,activeMusicIndex),
      {...musicList[activeMusicIndex], isPlaying: false },
      ...musicList.slice(activeMusicIndex + 1)
    ];
  }
  return musicList;
}

export default {
  toggleHighlightMusic,
  changePlayingMusicOrder,
  downlightAnyPlayingMusic,
  stopPlayingMusic
}