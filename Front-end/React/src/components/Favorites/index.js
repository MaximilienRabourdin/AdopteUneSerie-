// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import Categories from 'src/components/Categories';

// Composant
const Favorites = ({ series }) => (
  <Categories series={series} title="Mes Favoris" />
);

Favorites.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Favorites;
