// Import npm
import React from 'react';
import { Button } from 'semantic-ui-react'

// Import
import SignUpStyled from './SignUpStyled';

// Composant
const SignUp = () => (
  <SignUpStyled>
    <Button inverted color='blue'>
      <a href={"/inscription"}>Inscription</a>
    </Button>
  </SignUpStyled>
);


// Export
export default SignUp;
