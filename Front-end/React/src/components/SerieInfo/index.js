// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import HeaderSerie from './HeaderSerie';
import Header from 'src/components/Header';

// Style
//import './styles.css';

// == Composant
function SerieInfo({ serie }) {
  return (
    <div className="recipe">
      <Header/>
      <HeaderSerie
        name={serie.name}
        image={serie.poster_path}
        vote={serie.vote_average}
        overview={serie.overview}
        language={serie.original_language}
        airDate={serie.first_air_date}
        country={serie.origin_country}
      />
    </div>
  );
}

SerieInfo.propTypes = {
  serie: PropTypes.object.isRequired,
};

// == Export
export default SerieInfo;
