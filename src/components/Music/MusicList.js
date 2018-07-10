import React, { Component } from 'react';
import MusicItem from './MusicItem';

const styles = {
  listContainer: {
    width: '40%'
  },
  itemsContainer: {
    overflow: 'scroll'
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
class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.musicListItems.length !== nextProps.musicListItems.length) return true;
    return true;
  }

  renderMusicListItems = () => {
    const { musicListItems, addMusic, playListMusic } = this.props;
    return musicListItems.map((music, index) =>
      <MusicItem
        key={music.id}
        index={index}
        music={music}
        isPlayList={false}
        addMusic={addMusic}
        playListMusic={playListMusic}
      />
    );
  }

  render() {
    return (
      <div style={{ width: '40%' }} className="musicList">
        <h2>Hole List of shit</h2>
        <div style={{ overflow: 'scroll' }} className="musicListItems">
          {this.renderMusicListItems()}
        </div>
      </div>
    )
  }
}

export default MusicList;