import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMusicIfNeeds } from '../../logic/actionCreators/musicList';
import { addMusic, removeMusic } from '../../logic/actionCreators/musicPlaylist';
import { playMusic } from '../../logic/actionCreators/musicBase';

import MusicList from './MusicList';
import MusicPlayList from './MusicPlaylist';

const savePlaylist = (playlist) => {
  localStorage.setItem("playlist", JSON.stringify(playlist));
}
class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchMusicIfNeeds();
  }

  componentWillUnmount() {
    savePlaylist(this.props.musicPlaylist);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.musicList.items.length !== nextProps.musicList.items.length) return true;
    if (this.props.musicList.items !== nextProps.musicList.items) return true;
    if (this.props.musicPlaylist.length !== nextProps.musicPlaylist.length) return true;
    if (this.props.musicPlaylist !== nextProps.musicPlaylist) return true;
    return false;
  }

  fetchMusicIfNeeds = () => {
    this.props.fetchMusicIfNeeds();
  };

  render() {
    return (
      <div>
        <h1>List</h1>
        <MusicList
          musicListItems={this.props.musicList.items}
          addMusic={this.props.addMusic}
          playMusic={this.props.playMusic}
        />
        <MusicPlayList
          musicPlayListItems={this.props.musicPlaylist}
          removeMusic={this.props.removeMusic}
          playMusic={this.props.playMusic}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  musicList: state.musicList,
  musicPlaylist: state.musicPlaylist
});

const mapDispatchToProps = (dispatch) => ({
  fetchMusicIfNeeds: () => dispatch(fetchMusicIfNeeds()),
  addMusic: (music) => () => dispatch(addMusic(music)),
  removeMusic: (id) => () => dispatch(removeMusic(id)),
  playMusic: (id, source='list') => () => dispatch(playMusic({ id, source }))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);