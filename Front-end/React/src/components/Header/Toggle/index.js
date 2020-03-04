
// == Import npm
import React from 'react';
import { Checkbox } from 'semantic-ui-react';

// == Import
import ToggleStyled from './ToggleStyled';

// == Composant
const Toggle = () => (
  <ToggleStyled>
    <Checkbox
      toggle
    />
  </ToggleStyled>
);

// == Export
export default Toggle;
