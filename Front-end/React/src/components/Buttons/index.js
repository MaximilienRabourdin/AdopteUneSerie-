 //== Import npm
import React from 'react';
import { Button, Icon, Checkbox } from 'semantic-ui-react';

// == Import

import ButtonsStyled from './ButtonsStyled';
import MediaQuery from 'react-responsive';

// == Composant
const Buttons = () => (

  <ButtonsStyled>
    

    <Button circular color='facebook'>
      <Icon name='facebook' /> 
    </Button>

    <Button circular color='twitter'>
      <Icon name='twitter' /> 
    </Button>
    <MediaQuery minDeviceWidth={405}>
    <Checkbox toggle />
    </MediaQuery>




   
      
   
</ButtonsStyled>
  
  );
  
 // == Export
export default Buttons; 

