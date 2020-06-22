// Import npm
import React from 'react';
import { Button } from 'semantic-ui-react';

// Import
import SignUpStyled from './SignUpStyled';

// Composant
const SignUp = () => (
  <SignUpStyled>
    <Button inverted color="orange">
      <a href="/inscription">Inscription</a>
    </Button>
  </SignUpStyled>
);


// Export
export default SignUp;
