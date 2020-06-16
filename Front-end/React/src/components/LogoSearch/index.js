// Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
// Import
import LogoStyled from './LogoStyled';
import logo from 'src/assets/logo4.png'

// Composant
const Logo = () => (
  <LogoStyled>
    <Link to="/Accueil">
      <img src={logo} id="logo" />
      <p id="caption">AdopteUneSérie</p>
    </Link>
  </LogoStyled>
);


// Export
export default Logo;
