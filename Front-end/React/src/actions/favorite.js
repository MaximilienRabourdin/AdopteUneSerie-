// Types
export const LOAD_CHECK= 'LOAD_CHECK';
export const SAVE_CHECK = 'SAVE_CHECK';
export const ADD_SERIE = 'ADD_SERIE';
export const DELETE_SERIE = 'DELETE_SERIE';
export const LOAD_SERIES_FAVORITES= 'LOAD_SERIES_FAVORITES';
export const SAVE_SERIES_FAVORITES = 'SAVE_SERIES_FAVORITES';

// Load user's favorite series from server
export const loadSeriesFavorites = () => ({
  type: LOAD_SERIES_FAVORITES,
});

// Save user's favorite series in the store
export const saveSeriesFavorites = (series) => ({
  type: SAVE_SERIES_FAVORITES,
  series,
});

// Load "favorite status" of a serie from server
export const loadCheck = (id) => ({
  type: LOAD_CHECK,
  id
});

// Save "favorite status" of a serie in store
export const saveCheck = (status) => ({
  type: SAVE_CHECK,
  status,
});

// Add a serie in "user favorite list" in server
export const addSerie = (id) => ({
  type: ADD_SERIE,
  id
});

// Delete a serie in "user favorite list" in server
export const deleteSerie = (id) => ({
  type: DELETE_SERIE,
  id
});

