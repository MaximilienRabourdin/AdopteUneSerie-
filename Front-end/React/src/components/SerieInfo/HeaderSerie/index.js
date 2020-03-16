// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';

// == Import : local
import './styles.css';

// == Composant
const HeaderSerie = ({
  name, image, vote, overview
}) => {
  return (
    <header className="presentation">
      <MediaQuery maxDeviceWidth={425}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt="serie photo"
          className="presentation-image-mobile"
          />
        <div className="presentation-content-mobile">
          <h1 className="presentation-title-mobile">{name}</h1>
         { /*  <Rating maxRating={10} defaultRating={vote} icon='star' size='small' /> */}
        </div>
        <div className="synopsis-mobile">
          <h3>Synopsis</h3>
          <p>{overview}</p>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={426}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt="serie photo"
          className="presentation-image-desktop"
        />
        <div className="presentation-content-desktop">
          <h1 className="presentation-title-desktop">{name}</h1>
          <p>Notée : {vote}/10</p>
        { /* <Rating maxRating={10} defaultRating={vote} icon='star' size='huge' /> */}
        </div>
        <div className="synopsis-desktop">
          <h1>Synopsis</h1>
          <p>{overview}</p>
        </div>
      </MediaQuery>
    </header>
  );
};

HeaderSerie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  vote: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};


// == Export
export default HeaderSerie;
