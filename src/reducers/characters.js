import * as actions from '../actions';
import initiadData from '../data/initialData';

const characters = Object.keys(initiadData);

export default (state = characters, action) => {
  if (action.type === actions.SET_CHARACTERS) {
    return action.characters;
  } else {
    return state;
  }
};