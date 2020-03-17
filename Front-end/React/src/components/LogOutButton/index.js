// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

// == Import
import LogOutButtonStyled from './LogOutButtonStyled';

// == Composant
const LogOutButton = () => {

  const handleClick= (evt) => {
    sessionStorage.clear();
  };

  return (
  <LogOutButtonStyled onClick={handleClick}>
    <MediaQuery maxDeviceWidth={425}>
      <Button onClick={handleClick} inverted color='blue'>
        <a href={"/Accueil"}>Déconnexion</a>
      </Button>
    </MediaQuery>
    <MediaQuery minDeviceWidth={426}>
      <Button onClick={handleClick} inverted color='blue'>
        <a href={"/Accueil"}>Déconnexion</a>
      </Button>
    </MediaQuery>
  </LogOutButtonStyled>

  );
};


// == Export
export default LogOutButton;
