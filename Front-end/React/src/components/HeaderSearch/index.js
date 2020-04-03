// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

// == Import
import Logo from 'src/components/LogoSearch';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import AccountButton from 'src/components/AccountButton';
import LogOutButton from 'src/components/LogOutButton';
import FavoritesButton from 'src/components/FavoritesButton';
import HeaderStyled from './HeaderStyled';
import SearchBar from 'src/containers/SearchBar';
import Toggle from './Toggle';

// == Composant
const Header = () => {

  var data = sessionStorage.getItem('token');

  return (
  <HeaderStyled>

    <MediaQuery maxWidth={1400}>
      <div id="TOP">
        <div className="topMobile">
          <Logo href="#" />
          <SearchBar />
        </div>
        <div className="bottomMobile">
        {!(data) && 
          <React.Fragment>
            <SignUp />
            <SignIn />
          </React.Fragment>
        } 
        {(data) && 
          <React.Fragment>
            <AccountButton />
            <FavoritesButton />
            <LogOutButton />
        </React.Fragment>
        } 
        </div>
      </div>
    </MediaQuery>
    <MediaQuery minWidth={1401}>
      <div className="topDesktop">
        <Logo href="#" />
        <SearchBar id="searchBar" />
        <div id="signDesktop">
          {!(data) && 
            <React.Fragment>
              <SignUp id="signUpDesktop" />
              <SignIn />
            </React.Fragment>
          }  
          {(data) && 
            <React.Fragment>
              <AccountButton className="signUpDesktop" />
              <FavoritesButton className="signUpDesktop"  />
              <LogOutButton />
          </React.Fragment>
          } 
        </div>   
      </div>
    </MediaQuery>

  </HeaderStyled>
  );
};


// == Export
export default Header;
