import React, { Component, Fragment } from 'react';
import MusicItem from './MusicItem';

class MusicPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMusicItems = () => {
    const { musicPlayListItems } = this.props;
    return musicPlayListItems.map((item) =>
      <MusicItem
        key={item.id}
        {...item}
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