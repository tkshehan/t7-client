import * as actions from '../actions';

export default (state = false, action) => {
  if (action.type === actions.FETCH_DATA_SUCCESS) {
    return true;
  } else {
    return state;
  }
};