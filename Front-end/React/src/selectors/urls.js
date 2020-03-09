export const getSerieFromSlug = (series, slug) => {
  return series.find((serie) => serie.name === slug);
};
