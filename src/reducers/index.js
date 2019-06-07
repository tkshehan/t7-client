import {combineReducers} from 'redux';
import selected from './selected';
import characters from './characters';
import moveData from './moveData';

export default combineReducers({
  selected,
  characters,
  moveData,
});