import * as actions from '../actions';
import initialData from '../data/initialData';

export default (state = initialData, action) => {
  if (action.type === actions.SET_MOVE_DATA) {
    return action.moveData;
  } else {
    return state;
  }
};