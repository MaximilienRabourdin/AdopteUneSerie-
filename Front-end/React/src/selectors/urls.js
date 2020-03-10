import slugify from 'slugify';

export const getSlugFromString = (string) => {
  const slug = slugify(string, {
    remove: /[./]/g, // regex to remove characters
  });
  return slug;
};

export const getUrl = (prefix, string) => {
  return `${prefix}${(string)}`;
};

export const getSerieFromSlug = (series, slug) => {
  return series.find((serie) => (serie.name) === slug);
};

