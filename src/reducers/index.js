import {combineReducers} from 'redux';
import selected from './selected';
import characters from './characters';
import moveData from './moveData';
import isFetched from './isFetched';

export default combineReducers({
  selected,
  characters,
  moveData,
  isFetched,
});