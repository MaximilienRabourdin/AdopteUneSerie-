// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

// == Import
import AccountButtonStyled from './AccountButtonStyled';

// == Composant
const AccountButton = () => (
  <AccountButtonStyled>
    <MediaQuery maxDeviceWidth={425}>
      <Button inverted color='blue'>
        <a href={"#"}>Mon compte</a>
      </Button>
    </MediaQuery>
    <MediaQuery minDeviceWidth={426}>
      <Button inverted color='blue'>
        <a href={"/mon-compte"}>Mon compte</a>
      </Button>
    </MediaQuery>
  </AccountButtonStyled>
);


// == Export
export default AccountButton;
