import * as actions from '../actions';

const initialState = {
  error: null,
  isLoaded: false,
  characters: [],
  movelists: {},
  selected: 'akuma',
  KEY: 'FRAMEDATA',
};

const frameDataReducer = (state = initialState, action) => {
  if (action.type === actions.CHANGE_CHARACTER) {
    return Object.assign({}, state, {
      selected: action.character,
    });
  }

  return state;
};

export default frameDataReducer;