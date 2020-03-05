// == Import npm
import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';


// == Import
import ToggleStyled from './ToggleStyled';

<<<<<<< HEAD
// == Composant
const Toggle = () => (
  <ToggleStyled>
    <MediaQuery minDeviceWidth={426}>
      <Checkbox toggle />
    </MediaQuery>
=======

// == Composant
const Toggle = () => (
  <ToggleStyled>

    <MediaQuery minDeviceWidth={405}>

      <Checkbox style={{ minWidth: '40px', minheight: '20px' }} toggle />

    </MediaQuery>

>>>>>>> 0481b1d22eb2da40c93ad44e045b32654d087af6
  </ToggleStyled>
);

// == Export
export default Toggle;
