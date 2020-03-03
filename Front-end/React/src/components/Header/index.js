
// == Import npm
import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import MediaQuery from 'react-responsive';

// == Import
import Home from 'src/components/Home';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import HeaderStyled from './HeaderStyled';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

// == Composant
const Header = () => (
  <HeaderStyled>
    <MediaQuery maxDeviceWidth={425}>
      <div id="topMobileHeader">
        <Home href="#" className="logoTop" />
        <Toggle className="toggle" />
        <SearchBar />
      </div>
      <div id="bottomMobileHeader">
        <SignUp />
        <SignIn />
      </div>
    </MediaQuery>

    <MediaQuery minDeviceWidth={426}>
      <div id="header">
        <Home href="#" />
        <SearchBar />
        <SignUp />
        <SignIn />
      </div>
    </MediaQuery>

  </HeaderStyled>
);

// == Export
export default Header;
