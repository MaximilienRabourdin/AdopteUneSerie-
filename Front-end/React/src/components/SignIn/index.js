// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

// == Import
import SignInStyled from './SignInStyled';

// == Composant
const SignIn = () => (
  <SignInStyled>
    <MediaQuery maxWidth={425}>
      <Button inverted color='blue'>
        <a href={"/connexion"}>Connexion</a>
      </Button>
    </MediaQuery>
    <MediaQuery minWidth={426} id="signInDesktop">
      <Button inverted color='blue'>
        <a href={"/connexion"}>Connexion</a>
      </Button>
    </MediaQuery>
  </SignInStyled>
);


// == Export
export default SignIn;
