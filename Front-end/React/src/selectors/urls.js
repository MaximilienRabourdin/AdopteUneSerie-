import slugify from 'slugify';
import genres from 'src/data/genres';
import networks from 'src/data/networks';
import notes from 'src/data/notes';
import runtime from 'src/data/runTimeMax';

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
