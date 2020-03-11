// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';

// == Import
import LogoStyled from './LogoStyled';

// == Composant
const Logo = () => (
  <LogoStyled>
    <MediaQuery maxDeviceWidth={425}>
      <div id="logoMobile">
        <a href={"http://localhost:8080/"}>LOGO</a>
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={426}>
      <div id="logoDesktop">
        <a href={"http://localhost:8080/"}>ADOPTE UNE SERIE</a>        
      </div>
    </MediaQuery>
  </LogoStyled>
);


// == Export
export default Logo;
