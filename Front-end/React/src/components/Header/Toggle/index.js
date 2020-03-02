
// == Import npm
import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// == Import

// == Composant
const Toggle = () => (
  <MediaQuery maxDeviceWidth={400}>
    <Checkbox toggle />
  </MediaQuery>

);

// == Export
export default Toggle;
