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

  var data = sessionStorage.getItem('token');

  return (
  <HeaderStyled>

    <MediaQuery maxWidth={700}>
      <div id="TOP">
        <div className="topMobile">
          <Logo />
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

    <MediaQuery minWidth={701}>
      <div className="topDesktop">
        <Logo id="logoDesktop" />
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

// Export
export default Header;
