// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

// == Import
import Logo from 'src/components/Logo';
import SignIn from 'src/components/SignIn';
import SignUp from 'src/components/SignUp';
import AccountButton from 'src/components/AccountButton';
import LogOutButton from 'src/components/LogOutButton';
import HeaderStyled from './HeaderStyled';
import Toggle from './Toggle';

// == Composant
const Header = () => {

  var data = sessionStorage.getItem('token');

  return (
  <HeaderStyled>

    <MediaQuery maxDeviceWidth={425}>
      <div id="TOP">
        <Toggle />
        <div className="topMobile">
          <Logo id="logoMobile" />
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
            <LogOutButton />
        </React.Fragment>
        }  
        </div>
      </div>
    </MediaQuery>

    <MediaQuery minDeviceWidth={426}>
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
            <AccountButton id="signUpDesktop" />
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
