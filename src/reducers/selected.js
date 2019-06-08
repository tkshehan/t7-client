import * as actions from '../actions';

export default (state = 'akuma', action) => {
  if (action.type === actions.CHANGE_CHARACTER) {
    return action.character;
  } else {
    return state;
  }
};