// Import : npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

// Import : local
import logo from 'src/assets/logo4.png';
import IntroStyled from './IntroStyled';

// Composant
const Intro = () => (
  <IntroStyled>
    <MediaQuery minWidth={426}>
      <div className="div" />
      <div className="div" />
      <div className="div" />
      <div className="div" />
      <div className="div">
        <Link to="/Accueil">
          <img
            alt="logo"
            src={logo}
          />
        </Link>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={425}>
      <Link to="/Accueil">
        <img
          id="mobile"
          alt="logo"
          src={logo}
        />
      </Link>
    </MediaQuery>
  </IntroStyled>
);

// Export
export default Intro;
