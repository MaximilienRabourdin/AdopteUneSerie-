// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import Header from './Header';

// Style
//import './styles.css';

// == Composant
function SerieInfo({ serie }) {
  return (
    <div className="recipe">
      <Header
        name={serie[0].name}
        image={serie[0].poster_path}
        vote={serie[0].vote_average}
        overview={serie[0].overview}
        language={serie[0].original_language}
        airDate={serie[0].first_air_date}
        country={serie[0].origin_country}
      />
    </div>
  );
}

SerieInfo.propTypes = {
  serie: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// == Export
export default SerieInfo;
