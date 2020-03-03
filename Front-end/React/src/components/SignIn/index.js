// == Import npm
import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';

// == Import
import SignInStyled from './SignInStyled';

// == Composant
const SignIn = () => (
  <SignInStyled>
    <button type="button" className="btn btn-outline-info btn-sm"> Connexion </button>
  </SignInStyled>
);


// == Export
export default SignIn;
