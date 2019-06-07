import * as actions from '../actions';

export default (state = [], action) => {
  if (action.type === actions.SET_CHARACTERS) {
    return action.characters;
  } else {
    return state;
  }
};