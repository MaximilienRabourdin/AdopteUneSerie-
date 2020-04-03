// == Import npm
import React from 'react';
import MediaQuery from 'react-responsive';
import { Button } from 'semantic-ui-react'

// == Import
import FavoritesButtonStyled from './FavoritesButtonStyled';

// == Composant
const FavoritesButton = () => (
  <FavoritesButtonStyled>
    <MediaQuery maxWidth={425}>
      <Button inverted color='blue'>
        <a href={"/Favoris"}>Favoris</a>
      </Button>
    </MediaQuery>
    <MediaQuery minWidth={426} id="FavoritesButtonDesktop">
      <Button inverted color='blue'>
        <a href={"/Favoris"}>Favoris</a>
      </Button>
    </MediaQuery>
  </FavoritesButtonStyled>
);


// == Export
export default FavoritesButton;
