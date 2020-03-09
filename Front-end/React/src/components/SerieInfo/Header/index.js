// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.css';

// == Composant
const Header = ({
  name, image, origin, vote,
}) => (
  <header className="presentation">
    <img
      src={"https://image.tmdb.org/t/p/w500" + poster_path}
      alt="serie photo"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">{name}</h1>
      <p className="presentation-infos">{origin} - {note}</p>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  note: PropTypes.number.isRequired,
};


// == Export
export default Header;
