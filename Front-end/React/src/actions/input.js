// Types
export const LOAD_SERIE_INPUT= 'LOAD_SERIE_INPUT';
export const LOAD_SERIE_DROPDOWN= 'LOAD_SERIE_DROPDOWN';
export const SAVE_SERIE_INPUT = 'SAVE_SERIE_INPUT';

// Creators
export const loadSerieInput = (value) => ({
  type: LOAD_SERIE_INPUT,
  value
});

export const loadSerieDropdown = (idGenres, idNetwork, idNote, idTime) => ({
  type: LOAD_SERIE_DROPDOWN,
  genres: idGenres,
  network: idNetwork,
  note: idNote,
  time: idTime,
});

export const saveSerieInput = (serieInput) => ({
  type: SAVE_SERIE_INPUT,
  serieInput,
});
