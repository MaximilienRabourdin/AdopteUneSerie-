// Import : npm
import React, { useEffect} from 'react';
import PropTypes from 'prop-types';

// Import : local
// Composants
import HeaderSerie from 'src/containers/HeaderSerie';
import Header from 'src/containers/Header';

// Style
//import './styles.css';

// Composant
function SerieInfo({ 
  serie,
  slug,
  sendSlug,
  load,
  status,
 }) {

  useEffect(() => {
    var id = slug.match(/[0-9]+/g)
   sendSlug(id);
  },[]);

  if(load){
    return (
      <div className="recipe">
        <Header/>
        <HeaderSerie
          slug={slug}
          status={status}
          name={serie.name}
          image={serie.poster_path}
          vote={serie.vote_average}
          voteCount={serie.vote_count}
          overview={serie.overview}
          airDate={serie.first_air_date}
          numberSeasons={serie.number_of_seasons}
          numberEpisodes={serie.number_of_episodes}
          runTime={serie.episode_run_time}
          networks={serie.networks}
          productions={serie.productionCompagnies}
          seasons={serie.seasons}
          cast={serie.cast}
        />
      </div>
    );
  } else {
    return (
      <div>
          Loading...
      </div>
    );
  }
}

SerieInfo.propTypes = {
  status: PropTypes.number.isRequired,
  serie: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  sendSlug: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  vote: PropTypes.string.isRequired,
  voteCount: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
  numberSeasons: PropTypes.string.isRequired,
  numberEpisodes: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  networks: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
  productions: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
};

// Export
export default SerieInfo;
