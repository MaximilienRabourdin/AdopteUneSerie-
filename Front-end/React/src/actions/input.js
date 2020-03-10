// Types
export const LOAD_SERIE_INFO= 'LOAD_SERIE_INFO';
export const SAVE_SERIE_INFO = 'SAVE_SERIE_INFO';

// Creators
export const loadSerieInfo = (value) => ({
  type: LOAD_SERIE_INFO,
  value
});

export const saveSerieInfo = (serie) => ({
  type: SAVE_SERIE_INFO,
  serie,
});
