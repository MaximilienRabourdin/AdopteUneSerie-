// == Import npm
import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import MediaQuery from 'react-responsive';

// == Import
import SignUpStyled from './SignUpStyled';

// == Composant
const SignUp = () => (
  <SignUpStyled>
    <MediaQuery maxDeviceWidth={425}>
      <button type="button" className="btn btn-outline-info btn-sm"> Inscription </button>
    </MediaQuery>
    <MediaQuery minDeviceWidth={426}>
      <button type="button" className="btn btn-outline-info btn-md"> Inscription </button>
    </MediaQuery>
  </SignUpStyled>
);


// == Export
export default SignUp;
