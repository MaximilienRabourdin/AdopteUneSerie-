// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import Categories from 'src/components/Categories';

// Composant
const Recent = ({ series }) => (
  <Categories series={series} title="Séries récentes" />
);

Recent.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Recent;
