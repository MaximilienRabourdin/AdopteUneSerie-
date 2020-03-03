
// == Import npm
import React from 'react';
import { Checkbox } from 'semantic-ui-react';

// == Import
import ToggleStyled from './ToggleStyled';

// == Composant
const Toggle = () => (
  <ToggleStyled>
    <Checkbox
      style={{ minWidth: '40px', minheight: '20px' }}
      toggle
    />
  </ToggleStyled>
);

// == Export
export default Toggle;
