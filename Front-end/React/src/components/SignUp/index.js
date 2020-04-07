// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

// == Import
import SignUpStyled from './SignUpStyled';

// == Composant
const SignUp = () => (
  <SignUpStyled>
    <MediaQuery maxWidth={425}>
      <Button inverted color='blue'>
        <a href={"/inscription"}>Inscription</a>
      </Button>
    </MediaQuery>
    <MediaQuery minWidth={426}>
      <Button inverted color='blue'>
        <a href={"/inscription"}>Inscription</a>
      </Button>
    </MediaQuery>
  </SignUpStyled>
);


// == Export
export default SignUp;
