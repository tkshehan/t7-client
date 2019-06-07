export const CHANGE_CHARACTER = 'CHANGE_CHARACTER';
export const changeCharacter = (character) => ({
  type: CHANGE_CHARACTER,
  character,
});

export const SET_CHARACTERS = 'SET_CHARACTERS';
export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  characters,
});

export const SET_MOVE_DATA = 'SET_MOVE_DATA';
export const setMoveData = (moveData) => ({
  type: SET_MOVE_DATA,
  moveData,
});