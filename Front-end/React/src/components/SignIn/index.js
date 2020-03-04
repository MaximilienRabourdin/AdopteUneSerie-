// == Import npm
import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import MediaQuery from 'react-responsive';

// == Import
import SignInStyled from './SignInStyled';

// == Composant
const SignIn = () => (
  <SignInStyled>
  <MediaQuery maxDeviceWidth={425}>
    <button type="button" className="btn btn-outline-info btn-sm"> Connexion </button>
  </MediaQuery>
    <MediaQuery minDeviceWidth={426}>
      <button type="button" className="btn btn-outline-info btn-md"> Connexion </button>
    </MediaQuery>
  </SignInStyled>
);


// == Export
export default SignIn;
