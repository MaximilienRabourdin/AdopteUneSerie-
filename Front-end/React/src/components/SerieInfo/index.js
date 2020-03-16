// == Import : npm
import React, { useEffect} from 'react';
import PropTypes from 'prop-types';

// == Import : local
// Composants
import HeaderSerie from './HeaderSerie';
import Header from 'src/components/Header';

// Style
//import './styles.css';

// == Composant
function SerieInfo({ 
  serie,
  slug,
  sendSlug
 }) {

  useEffect(() => {
    var id = slug.match(/[0-9]+/g)
    //console.log("description path", id)
   sendSlug(id);
  },[]);
  return (
    <div className="recipe">
      <Header/>
      <HeaderSerie
        name={serie.name}
        image={serie.poster_path}
        vote={serie.vote_average}
        overview={serie.overview}
      />
    </div>
  );
}

SerieInfo.propTypes = {
  serie: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  sendSlug: PropTypes.func.isRequired,
};

// == Export
export default SerieInfo;
