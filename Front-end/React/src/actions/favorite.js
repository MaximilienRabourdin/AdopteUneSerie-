// Types
export const LOAD_CHECK= 'LOAD_CHECK';
export const SAVE_CHECK = 'SAVE_CHECK';
export const ADD_SERIE = 'ADD_SERIE';
export const SAVE_ADD = 'SAVE_ADD';
export const DELETE_SERIE = 'DELETE_SERIE';
export const SAVE_DELETE = 'SAVE_DELETE';
export const LOAD_SERIES_FAVORITES= 'LOAD_SERIES_FAVORITES';
export const SAVE_SERIES_FAVORITES = 'SAVE_SERIES_FAVORITES';

// Creators
export const loadSeriesFavorites = () => ({
  type: LOAD_SERIES_FAVORITES,
});
export const saveSeriesFavorites = (series) => ({
  type: SAVE_SERIES_FAVORITES,
  series,
});
export const loadCheck = (id) => ({
  type: LOAD_CHECK,
  id
});
export const addSerie = (id) => ({
  type: ADD_SERIE,
  id
});
export const deleteSerie = (id) => ({
  type: DELETE_SERIE,
  id
});

export const saveCheck = (status) => ({
  type: SAVE_CHECK,
  status,
});
export const saveAdd = (statusAdd) => ({
  type: SAVE_ADD,
  statusAdd,
});
export const saveDelete = (statusDelete) => ({
  type: SAVE_DELETE,
  statusDelete,
});

