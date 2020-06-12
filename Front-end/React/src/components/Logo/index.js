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
    <MediaQuery maxWidth={700}>
    <Link to="/Accueil">
      <img src={logo} id="logoMobile" />
      <p id="captionMobile">AdopteUneSérie</p>
    </Link>
    </MediaQuery>
    <MediaQuery minWidth={701}>
    <Link to="/Accueil">
      <img src={logo} id="logoDesktop" />
      <p id="captionDesktop">AdopteUneSérie</p>
    </Link>
    </MediaQuery>
  </LogoStyled>
);


// Export
export default Logo;
