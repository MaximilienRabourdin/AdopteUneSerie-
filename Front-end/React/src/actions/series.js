// Types
export const LOAD_SERIES_TENDANCE= 'LOAD_SERIES_TENDANCE';
export const LOAD_SERIES_TOP_RATED= 'LOAD_SERIES_TOP_RATED';
export const LOAD_SERIES_RECENT= 'LOAD_SERIES_RECENT';
export const SAVE_SERIES_TENDANCE = 'SAVE_SERIES_TENDANCE';
export const SAVE_SERIES_TOP_RATED = 'SAVE_SERIES_TOP_RATED';
export const SAVE_SERIES_RECENT = 'SAVE_SERIES_RECENT';

// Load series data from server
export const loadSeriesTendance = () => ({
  type: LOAD_SERIES_TENDANCE,
});

// Load series data from server
export const loadSeriesTopRated = () => ({
  type: LOAD_SERIES_TOP_RATED,
});

// Load series data from server
export const loadSeriesRecent = () => ({
  type: LOAD_SERIES_RECENT,
});

// Save series data to store
export const saveSeriesTendance = (series) => ({
  type: SAVE_SERIES_TENDANCE,
  series,
});

// Save series data to store
export const saveSeriesTopRated = (series) => ({
  type: SAVE_SERIES_TOP_RATED,
  series,
});

// Save series data to store
export const saveSeriesRecent = (series) => ({
  type: SAVE_SERIES_RECENT,
  series,
});
