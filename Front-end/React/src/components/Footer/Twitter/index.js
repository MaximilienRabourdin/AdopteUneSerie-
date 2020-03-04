import React from 'react';
import { Button, Icon, Checkbox } from 'semantic-ui-react';

// == Import

import TwitterStyled from './TwitterStyled.js';
import MediaQuery from 'react-responsive';

// == Composant

const Twitter = () => (
  
  <TwitterStyled>

  <div id='twitter'>

  <Button circular color='twitter'>
    <Icon classame='twitter' /> 
  </Button>
  </div>
  
  </TwitterStyled>
);

// == Export
export default Twitter;
