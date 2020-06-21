// Import npm
import React from 'react';

// Import
import Logo from 'src/components/LogoSearch';
import SignIn from 'src/components/Header/SignIn';
import SignUp from 'src/components/Header/SignUp';
import AccountButton from 'src/components/Header/AccountButton';
import LogOutButton from 'src/components/Header/LogOutButton';
import FavoritesButton from 'src/components/Header/FavoritesButton';
import SearchBar from 'src/containers/SearchBar';
import HeaderStyled from './HeaderStyled';

// Composant
const Header = () => {
  const token = sessionStorage.getItem('token');

  return (
    <HeaderStyled>
      <div id="TOP">
        <div className="topMobile">
          <Logo />
          <SearchBar />
        </div>
        {!(token)
          && (
            <div id="sign">
              <SignUp />
              <SignIn />
            </div>
          )}
        {(token)
          && (
            <div id="sign">
              <AccountButton className="signUpDesktop" />
              <FavoritesButton className="signUpDesktop" />
              <LogOutButton />
            </div>
          )}
      </div>
    </HeaderStyled>
  );
};


// Export
export default Header;
