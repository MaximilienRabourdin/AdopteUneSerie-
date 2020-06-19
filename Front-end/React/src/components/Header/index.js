// Import npm
import React from 'react';

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
  // Récupération du token enregistré dans le session storage à la connexion
  const token = sessionStorage.getItem('token');

  return (
    <HeaderStyled>
      <div id="TOP">
        <Logo />
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
              <AccountButton className="Desktop" />
              <FavoritesButton className="Desktop" />
              <LogOutButton />
            </div>
          )}
      </div>
    </HeaderStyled>
  );
};

// Export
export default Header;
