import { combineReducers } from 'redux';
import musicList from '../reducers/musicList';
import musicPlaylist from '../reducers/musicPlaylist';

const rootReducer = combineReducers({
  musicList,
  musicPlaylist
});

export default rootReducer;