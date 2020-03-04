import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

// == Import
import FacebookStyled from './FacebookStyled';

// == Composant
const Facebook = () => (
  <FacebookStyled>
    <div id="facebook">
      <Button circular color="facebook">
        <Icon classname="facebook" />
      </Button>
    </div>
  </FacebookStyled>
);

// == Export
export default Facebook;
