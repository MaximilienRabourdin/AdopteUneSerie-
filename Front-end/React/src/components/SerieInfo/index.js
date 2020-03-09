// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import Header from './Header';

// Style
import './styles.css';

// == Composant
function SerieInfo({ series }) {
  return (
    <div className="recipe">
      <Header
        name={series.name}
        image={series.poster_path}
        origin={series.origin_country}
        vote={series.vote_average}
      />
    </div>
  );
}

SerieInfo.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// == Export
export default SerieInfo;
