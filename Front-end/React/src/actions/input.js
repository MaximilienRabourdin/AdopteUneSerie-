// Types
export const LOAD_SERIE_INPUT= 'LOAD_SERIE_INPUT';
export const SAVE_SERIE_INPUT = 'SAVE_SERIE_INPUT';

// Creators
export const loadSerieInput = (value) => ({
  type: LOAD_SERIE_INPUT,
  value
});

export const saveSerieInput = (serieInput) => ({
  type: SAVE_SERIE_INPUT,
  serieInput,
});
