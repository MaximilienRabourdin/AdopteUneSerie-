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
        LOGO
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={426}>
      <div id="logoDesktop">
        ADOPTE UNE SERIE
      </div>
    </MediaQuery>
  </LogoStyled>
);


// == Export
export default Logo;
