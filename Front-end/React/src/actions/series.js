// Types
export const LOAD_SERIES= 'LOAD_SERIES';
export const SAVE_SERIES = 'SAVE_SERIES';

// Creators
export const loadSeries = () => ({
  type: LOAD_SERIES,
});

export const saveSeries = (series) => ({
  type: SAVE_SERIES,
  series,
});
