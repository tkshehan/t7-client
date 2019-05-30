import * as actions from '../actions';

const initialState = {
  error: null,
  isLoaded: false,
  characters: [],
  movelists: {},
  selected: 'akuma',
  KEY: 'FRAMEDATA',
};

export const frameDataReducer = (state = initialState, action) => {
  if (action.type === actions.CHANGE_CHARACTER) {
    return Object.assign({}, state, {
      selected: 'akuma',
    });
  }

  return state;
};