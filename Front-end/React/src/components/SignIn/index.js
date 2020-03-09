// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

// == Import
import SignInStyled from './SignInStyled';

// == Composant
const SignIn = () => (
  <SignInStyled>
    <MediaQuery maxDeviceWidth={425}>
      <Button inverted color='blue'>
      Connexion
      </Button>
    </MediaQuery>
    <MediaQuery minDeviceWidth={426} id="signInDesktop">
      <Button inverted color='blue'>
      Connexion
      </Button>
    </MediaQuery>
  </SignInStyled>
);


// == Export
export default SignIn;
