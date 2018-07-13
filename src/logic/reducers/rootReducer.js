import { combineReducers } from 'redux';
import musicList from '../reducers/music/musicList';
import musicPlaylist from '../reducers/music/musicPlaylist';
import comptabilityData from '../reducers/comptability/comptability';

const rootReducer = combineReducers({
  musicList,
  musicPlaylist,
  comptabilityData
});

export default rootReducer;