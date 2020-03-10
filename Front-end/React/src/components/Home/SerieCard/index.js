// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import { getUrl } from 'src/selectors/urls';

// == Composant
const SerieCard = ({ serie, click }) => {
  const handleClick = (serie) => {
    evt.preventDefault();
    click(serie.name);
  };
  return (
    <Card  color='blue'>
      <Image src={"https://image.tmdb.org/t/p/w500" + serie.poster_path} 
      wrapped ui={false} 
      as='a'
      href= {getUrl('http://localhost:8080/', serie.name)}
      onClick={handleClick}
      />
      <Card.Content>
        <Card.Header>{serie.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

SerieCard.propTypes = {
  serie: PropTypes.object.isRequired,
  click:  PropTypes.func.isRequired,
};
// == Export
export default SerieCard;
