// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';

// == Import
import Logo from 'src/components/Logo';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import HeaderStyled from './HeaderStyled';
import Toggle from './Toggle';

// == Composant
const Header = () => (
  <HeaderStyled>

    <MediaQuery maxDeviceWidth={425}>
      <div id="TOP">
        <Toggle />
        <div className="topMobile">
          <Logo />
        </div>
        <div className="bottomMobile">
          <SignUp />
          <SignIn />
        </div>
      </div>
    </MediaQuery>

    <MediaQuery minDeviceWidth={426}>
      <div className="topDesktop">
        <Logo />
        <div id="signDesktop">
          <SignUp id="signUpDesktop" />
          <SignIn />
        </div>
      </div>
    </MediaQuery>

  </HeaderStyled>
);

// == Export
export default Header;
