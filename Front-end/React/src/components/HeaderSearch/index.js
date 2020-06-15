// Import npm
import React from 'react';
import MediaQuery from 'react-responsive';

// Import
import Logo from 'src/components/LogoSearch';
import SignIn from 'src/components/Header/SignIn';
import SignUp from 'src/components/Header/SignUp';
import AccountButton from 'src/components/Header/AccountButton';
import LogOutButton from 'src/components/Header/LogOutButton';
import FavoritesButton from 'src/components/Header/FavoritesButton';
import HeaderStyled from './HeaderStyled';
import SearchBar from 'src/containers/SearchBar';

// Composant
const Header = () => {

  var data = sessionStorage.getItem('token');

  return (
  <HeaderStyled>
    <div id="TOP">
      <div className="topMobile">
        <Logo />
        <SearchBar />
      </div>  
      <div id="sign">
        {!(data) && 
          <React.Fragment>
            <SignUp />
            <SignIn />
          </React.Fragment>
        }
        {(data) && 
          <React.Fragment>
            <AccountButton className="signUpDesktop" />
            <FavoritesButton className="signUpDesktop" />
            <LogOutButton />
        </React.Fragment>
        }  
      </div>
    </div>
  </HeaderStyled>
  );
};


// Export
export default Header;
