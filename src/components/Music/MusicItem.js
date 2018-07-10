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

const renderAddMusicBtn = () => {
  return (
    <div className="musicPlayerContainer" style={styles.addPlaylistBtn}>
      <i className="fa fa-2x fa-plus" aria-hidden="true"></i>
    </div>
  );
}

const renderPlayMusicBtn = () => {
  return (
    <div className="musicPlayerContainer" style={styles.playerBtn}>
      <i className="fa fa-2x fa-play-circle" aria-hidden="true"></i>
    </div>
  );
}

const renderRemoveMusicBtn = () => {
  return (
    <div className="musicPlayerContainer" style={styles.playerBtn}>
      <i className="fa fa-2x fa-times" aria-hidden="true"></i>
    </div>
  );
}

const MusicItem = ({ item, isPlayList }) => {
  const strippedStyle = item.id % 2 === 0 ? {backgroundColor: 'white'} : {backgroundColor: '#efefef'};
  return (
    <div className="musicItem" style={{...styles.container, ...strippedStyle}}>
      <div style={styles.infosContainer} className="musicInfoContainer">
        <h4 style={styles.title}>
          {item.title}
        </h4>
        <p style={styles.description}>
          {item.description}
        </p>
      </div>
      { isPlayList ? renderRemoveMusicBtn() : renderAddMusicBtn()}
      {renderPlayMusicBtn()}
    </div>
  );
};

export default MusicItem;