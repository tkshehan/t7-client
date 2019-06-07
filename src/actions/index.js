import {STORAGE_KEY} from '../data/config';

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

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = () => ({
  type: FETCH_DATA_SUCCESS
});


export const fetchData = () => (dispatch) => {
  return fetch('https://t7frames-server.herokuapp.com/frame-data').then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => {
    dispatch(updateData(data));
    dispatch(fetchDataSuccess());
    saveData(data);
  });
}

export const loadData = () => (dispatch) => {
  const result = localStorage.getItem(STORAGE_KEY) || false;
  if (!result) return;
  const moveData = JSON.parse(result);
  dispatch(updateData(moveData));
}

const updateData = (data) => (dispatch) => {
  const characters = Object.keys(data);
  dispatch(setCharacters(characters));
  dispatch(setMoveData(data));
}

const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}