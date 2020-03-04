// == Import npm
import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';


// == Import
import ToggleStyled from './ToggleStyled';

// == Composant
const Toggle = () => (
  <ToggleStyled>
    <MediaQuery minDeviceWidth={426}>
      <Checkbox toggle />
    </MediaQuery>
  </ToggleStyled>
);

// == Export
export default Toggle;
