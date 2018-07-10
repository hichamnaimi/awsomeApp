import React, { Component, Fragment } from 'react';
import MusicItem from './MusicItem';

class MusicPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.musicPlayListItems.length !== nextProps.musicPlayListItems.length) return true;
    return false;
  }

  renderMusicItems = () => {
    const { musicPlayListItems, removeMusic } = this.props;
    return musicPlayListItems.map((music, index) =>
      <MusicItem
        key={music.id}
        index={index}
        music={music}
        isPlayList={true}
        removeMusic={removeMusic}
      />
    );
  }

  render() {
    return (
      <div style={{ width: '40%' }}>
        <h2>Hole Add List of shit</h2>
        <div style={{ overflow: 'scroll' }}>
          {this.renderMusicItems()}
        </div>
      </div>
    )
  }
}

export default MusicPlaylist;