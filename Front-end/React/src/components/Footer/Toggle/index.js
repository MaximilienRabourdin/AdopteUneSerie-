// Import npm
import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';


// Import
import ToggleStyled from './ToggleStyled';


// Composant
const Toggle = () => (
  <ToggleStyled>

    <MediaQuery minWidth={405}>

      <Checkbox style={{ minWidth: '40px', minheight: '20px' }} toggle />

    </MediaQuery>

  </ToggleStyled>
);

// Export
export default Toggle;
