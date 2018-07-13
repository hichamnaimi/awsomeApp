import { combineReducers } from 'redux';
import musicList from '../reducers/music/musicList';
import musicPlaylist from '../reducers/music/musicPlaylist';

const rootReducer = combineReducers({
  musicList,
  musicPlaylist
});

export default rootReducer;