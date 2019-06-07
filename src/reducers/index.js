import {combineReducers} from 'redux';
import selected from './selected';
import characters from './characters';
import moveData from './moveData';

const initialState = {
  error: null,
  isLoaded: false,
};

export default combineReducers({
  selected,
  characters,
  moveData,
});