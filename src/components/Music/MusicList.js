import React, { Component } from 'react';
import MusicItem from './MusicItem';

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
        <h2>Hole List of shit</h2>
        <div style={{  }} className="musicListItems">
          {this.renderMusicListItems()}
        </div>
      </div>
    )
  }
}

export default MusicList;