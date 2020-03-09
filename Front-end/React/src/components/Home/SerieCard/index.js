// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// == Composant
const SerieCard = ({ poster_path, name }) => (
  <Card  color='blue'>
    <Image src={"https://image.tmdb.org/t/p/w500" + poster_path} 
    wrapped ui={false} 
    as='a'
    href={"http://localhost:8080/" + name}
    />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>
);

SerieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// == Export
export default SerieCard;
