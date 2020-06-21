// Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// Import
import logo from 'src/assets/logo4.png';
import LogoStyled from './LogoStyled';

// Composant
const Logo = () => (
  <LogoStyled>
    <Link to="/Accueil">
      <img
        src={logo}
        id="logo"
        alt="logo"
      />
      <p id="caption">AdopteUneSérie</p>
    </Link>
  </LogoStyled>
);

// Export
export default Logo;
