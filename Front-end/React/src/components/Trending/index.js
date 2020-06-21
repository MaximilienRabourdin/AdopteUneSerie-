// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import Categories from 'src/components/Categories';

// Composant
const Trending = ({ series }) => (
  <Categories series={series} title="Séries tendances" />
);

Trending.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Trending;
