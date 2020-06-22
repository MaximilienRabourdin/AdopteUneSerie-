// Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import : local
import HeaderSerie from 'src/containers/HeaderSerie';
import Header from 'src/containers/Header';
import LoadingStyled from './LoadingStyled';

// Composant
function SerieInfo({
  serie,
  slug,
  sendSlug,
  load,
  status,
}) {
  // console.log(serie);
  useEffect(() => {
    const id = slug.match(/[0-9]+/g);
    sendSlug(id);
  }, []);

  if (load) {
    return (
      <div className="recipe">
        <Header />
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
  }
  return (
    <div>
      <LoadingStyled>
        <Header />
        <div
          className="head"
        >
          <span className="neonStyle">Loading... </span>
        </div>
      </LoadingStyled>
    </div>
  );
}

SerieInfo.propTypes = {
  serie: PropTypes.object.isRequired,
  status: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  sendSlug: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
};

// Export
export default SerieInfo;
