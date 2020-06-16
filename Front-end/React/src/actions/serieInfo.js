// Types
export const LOAD_SERIE_INFO= 'LOAD_SERIE_INFO';
export const SAVE_SERIE_INFO = 'SAVE_SERIE_INFO';
export const SET_LOAD = 'SET_LOAD';

// Load serie data from server
export const loadSerieInfo = (id) => ({
  type: LOAD_SERIE_INFO,
  id,
});

// Save serie data to store
export const saveSerieInfo = (serie) => ({
  type: SAVE_SERIE_INFO,
  serie,
});

// Save the load's status 
export const setLoad = (load) => ({
  type: SET_LOAD,
  load,
});
