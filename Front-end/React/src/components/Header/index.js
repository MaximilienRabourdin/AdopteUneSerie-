
// == Import npm
import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import MediaQuery from 'react-responsive';

// == Import
import Logo from 'src/components/Logo';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import HeaderStyled from './HeaderStyled';
import SearchBar from './SearchBar';
import Toggle from './Toggle';

// == Composant
const Header = () => (
  <HeaderStyled>

    <MediaQuery maxDeviceWidth={425}>
      <Toggle />
      <div className="topHeaderMobile">
        <Logo href="#" className="logoMobile" />
        <SearchBar className="searchBarMobile" />
      </div>
      <div className="bottomHeaderMobile">
        <SignUp className="SignUpMobile" />
        <SignIn className="SignInMobile" />
      </div>
    </MediaQuery>

    <MediaQuery minDeviceWidth={426}>
      <div id="header">
        <Logo href="#" />
        <SearchBar />
        <SignUp />
        <SignIn />
      </div>
    </MediaQuery>
    
  </HeaderStyled>
);

// == Export
export default Header;
