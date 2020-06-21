// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import Categories from 'src/components/Categories';

// Composant
const TopRated = ({ series }) => (
  <Categories series={series} title="Séries les mieux notées" />
);

TopRated.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TopRated;
