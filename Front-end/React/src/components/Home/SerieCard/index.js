// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';
import { getUrl } from 'src/selectors/urls';

// == Composant
const SerieCard = ({ serie, //click 
}) => {
 // const handleClick = (evt) => {
    //console.log(serie.id);
 //  click(serie.id);
 // };
  return (
    <Card  color='blue'>
      <Image src={"https://image.tmdb.org/t/p/w500" + serie.poster_path} 
      wrapped ui={false} 
      />
      <Card.Content>
        <Button
        attached='bottom'
        value={serie.id}
        //onClick={handleClick}
        as='a'
        href= {getUrl('/serie/', serie.id)}
        >
          {serie.name}
        </Button>
      </Card.Content>
    </Card>
  );
};

SerieCard.propTypes = {
  serie: PropTypes.object.isRequired,
  //click:  PropTypes.func.isRequired,
};
// == Export
export default SerieCard;
