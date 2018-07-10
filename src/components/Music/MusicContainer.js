import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMusicIfNeeds, playListMusic } from '../../logic/actionCreators/musicList';
import { addMusic, removeMusic, playPlayistMusic } from '../../logic/actionCreators/musicPlaylist';
import MusicList from './MusicList';
import MusicPlayList from './MusicPlaylist';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchMusicIfNeeds();
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
          playListMusic={this.props.playListMusic}
        />
        <MusicPlayList
          musicPlayListItems={this.props.musicPlaylist}
          removeMusic={this.props.removeMusic}
          playPlayistMusic={this.props.playPlayistMusic}
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
  playListMusic: (id) => () => dispatch(playListMusic(id)),
  playPlayistMusic: (id) => () => dispatch(playPlayistMusic(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicContainer);