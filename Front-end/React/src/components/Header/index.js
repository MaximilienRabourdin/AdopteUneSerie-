// Import npm
import React from 'react';
import MediaQuery from 'react-responsive';

// Import
import Logo from 'src/components/Logo';
import SignIn from 'src/components/Header/SignIn';
import SignUp from 'src/components/Header/SignUp';
import AccountButton from 'src/components/Header/AccountButton';
import LogOutButton from 'src/components/Header/LogOutButton';
import FavoritesButton from 'src/components/Header/FavoritesButton';
import HeaderStyled from './HeaderStyled';

// Composant
const Header = () => {
  const data = sessionStorage.getItem('token');

  return (
    <HeaderStyled>
      <div id="TOP">
        <Logo />
        <div id="sign">
          {!(data)
          && (
          <>
            <SignUp />
            <SignIn />
          </>
          )}
          {(data)
          && (
          <>
            <AccountButton className="signUpDesktop" />
            <FavoritesButton className="signUpDesktop" />
            <LogOutButton />
          </>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
};

// Export
export default Header;
