// == Import npm
import React from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';

// == Import
import SignUpStyled from './SignUpStyled';

// == Composant
const SignUp = () => (
  <SignUpStyled>
    <button type="button" className="btn btn-outline-info btn-sm"> Inscription </button>
  </SignUpStyled>
);


// == Export
export default SignUp;
