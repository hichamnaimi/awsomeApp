import React from 'react';

const styles = {
  container: {
    display: 'flex',
    marginBottom: '1%',
    padding: '1.5% 0'
  },
  infosContainer: {
    flex: '13'
  },
  title: {
    margin: 0
  },
  description: {
    fontSize: '0.8em',
    margin: 0,
    fontStyle: 'italic'
  },
  addPlaylistBtn: {
    flex: '1',
    cursor: 'pointer'
  },
  playerBtn: {
    flex: '1',
    cursor: 'pointer'
  },
}

const MusicItem = ({ index, music, isPlayList, addMusic, removeMusic, playListMusic, playPlayistMusic }) => {
  const strippedStyle = index % 2 === 0 ? {backgroundColor: '#efefef'} : {backgroundColor: 'white'};
  const renderAddMusicBtn = () => {
    return (
      <div onClick={addMusic(music)} className="musicPlayerContainer" style={styles.addPlaylistBtn}>
        <i className="fa fa-2x fa-plus" aria-hidden="true"></i>
      </div>
    );
  }
  
  const renderPlayMusicBtn = () => {
    const playMusic = isPlayList ? playPlayistMusic : playListMusic;
    return (
      <div onClick={playMusic(music.id)} className="musicPlayerContainer" style={styles.playerBtn}>
        <i className="fa fa-2x fa-play-circle" aria-hidden="true"></i>
      </div>
    );
  }
  
  const renderRemoveMusicBtn = () => {
    return (
      <div onClick={removeMusic(music.id)} className="musicPlayerContainer" style={styles.playerBtn}>
        <i className="fa fa-2x fa-times" aria-hidden="true"></i>
      </div>
    );
  }
  
  return (
    <div className="musicItem" style={{...styles.container, ...strippedStyle}}>
      <div style={styles.infosContainer} className="musicInfoContainer">
        <h4 style={styles.title}>
          {music.title}
        </h4>
        <p style={styles.description}>
          {music.description}
        </p>
      </div>
      { isPlayList ? renderRemoveMusicBtn() : renderAddMusicBtn()}
      {renderPlayMusicBtn()}
    </div>
  );
};

export default MusicItem;