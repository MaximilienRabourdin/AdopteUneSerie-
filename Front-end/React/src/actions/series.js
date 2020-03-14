// Types
export const LOAD_SERIES_TENDANCE= 'LOAD_SERIES_TENDANCE';
export const LOAD_SERIES_TOP_RATED= 'LOAD_SERIES_TOP_RATED';
export const LOAD_SERIES_RECENT= 'LOAD_SERIES_RECENT';
export const SAVE_SERIES_TENDANCE = 'SAVE_SERIES_TENDANCE';
export const SAVE_SERIES_TOP_RATED = 'SAVE_SERIES_TOP_RATED';
export const SAVE_SERIES_RECENT = 'SAVE_SERIES_RECENT';

// Creators
export const loadSeriesTendance = () => ({
  type: LOAD_SERIES_TENDANCE,
});
export const loadSeriesTopRated = () => ({
  type: LOAD_SERIES_TOP_RATED,
});
export const loadSeriesRecent = () => ({
  type: LOAD_SERIES_RECENT,
});

export const saveSeriesTendance = (series) => ({
  type: SAVE_SERIES_TENDANCE,
  series,
});

export const saveSeriesTopRated = (series) => ({
  type: SAVE_SERIES_TOP_RATED,
  series,
});

export const saveSeriesRecent = (series) => ({
  type: SAVE_SERIES_RECENT,
  series,
});
