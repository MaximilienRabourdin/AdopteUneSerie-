// Types
export const LOAD_CHECK= 'LOAD_CHECK';
export const SAVE_CHECK = 'SAVE_CHECK';
export const ADD_SERIE = 'ADD_SERIE';
export const SAVE_ADD = 'SAVE_ADD';
export const DELETE_SERIE = 'DELETE_SERIE';
export const SAVE_DELETE = 'SAVE_DELETE';

// Creators
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

