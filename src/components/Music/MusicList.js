import React, { Component } from 'react';
import MusicItem from './MusicItem';
import { Typography } from '@material-ui/core';

const styles = {
  title: {
    display: 'flex',
    margin: ' 3% 0px'
  },
  tileIcon: {
    color: '#445258',
    marginRight: '2%',
  }
}
class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.musicListItems.length !== nextProps.musicListItems.length) return true;
    if (this.props.musicListItems !== nextProps.musicListItems) return true;
    return false;
  }

  renderMusicListItems = () => {
    const { musicListItems, addMusic, playMusic } = this.props;
    return musicListItems.map((music, index) =>
      <MusicItem
        key={music.id}
        index={index}
        music={music}
        isPlayList={false}
        addMusic={addMusic}
        playMusic={playMusic}
      />
    );
  }

  render() {
    //overflowY: scroll
    return (
      <div style={{ width: '40%' }} className="musicList">
        <div style={styles.title}>
          <i style={styles.tileIcon} className="fas fa-2x fa-list"></i>
          <Typography variant="headline">Music List</Typography>
        </div>
        <div className="musicListItems">
          {this.renderMusicListItems()}
        </div>
      </div>
    )
  }
}

export default MusicList;