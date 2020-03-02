// == Import npm
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

// == Import

import ButtonsStyled from './ButtonsStyled';

// == Composant
const Buttons = () => (

  <ButtonsStyled>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
  </ButtonsStyled>

);

// == Export
export default Buttons;
