// Types
export const LOAD_SERIE_INFO= 'LOAD_SERIE_INFO';
export const SAVE_SERIE_INFO = 'SAVE_SERIE_INFO';
export const SET_LOAD = 'SET_LOAD';

// Creators
export const loadSerieInfo = (id) => ({
  type: LOAD_SERIE_INFO,
  id
});

export const saveSerieInfo = (serie) => ({
  type: SAVE_SERIE_INFO,
  serie,
});

export const setLoad = (load) => ({
  type: SET_LOAD,
  load,
});
