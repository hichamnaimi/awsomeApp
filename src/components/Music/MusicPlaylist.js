import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import MusicItem from './MusicItem';

const styles = {
  title: {
    display: 'flex',
    margin: ' 3% 0px'
  },
  tileIcon: {
    color: 'red',
    marginRight: '2%',
  }
}
class MusicPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.musicPlayListItems.length !== nextProps.musicPlayListItems.length) return true;
    if (this.props.musicPlayListItems !== nextProps.musicPlayListItems) return true;
    return false;
  }

  renderMusicItems = () => {
    const { musicPlayListItems, removeMusic, playMusic } = this.props;
    return musicPlayListItems.map((music, index) =>
      <MusicItem
        key={music.id}
        index={index}
        music={music}
        isPlayList={true}
        removeMusic={removeMusic}
        playMusic={playMusic}
      />
    );
  }

  render() {
    return this.props.musicPlayListItems.length > 0 && (
      <div style={{ width: '40%' }}>
        <div style={styles.title}>
          <i style={styles.tileIcon} className="far fa-2x fa-heart"></i>
          <Typography variant="headline">Favorite playlist</Typography>
        </div>
        <div>
          {this.renderMusicItems()}
        </div>
      </div>
    )
  }
}

export default MusicPlaylist;