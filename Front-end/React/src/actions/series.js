// Types
export const LOAD_SERIES= 'LOAD_SERIES';
export const SAVE_SERIE = 'SAVE_SERIE';

// Creators
export const loadSeries = () => ({
  type: LOAD_SERIES,
});

export const saveSerie = (value) => ({
  type: SAVE_SERIE,
  value,
});
