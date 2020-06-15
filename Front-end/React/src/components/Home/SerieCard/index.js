// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import CardStyled from './CardStyled';

// Composant
const SerieCard = ({ serie }) => {
  return (
    <Link to={"/serie/" + serie.id}>
      <CardStyled>
          <Card style={{maxWidth: '90%', margin:'0 5% 5% 5%'}}>
            <Image src={"https://image.tmdb.org/t/p/w500" + serie.poster_path} 
            wrapped ui={false} 
            style={{boxShadow: '10px 10px 30px #242222'}}
            className='hover'
            />
          </Card>
      </CardStyled>
    </Link>
  );
};

SerieCard.propTypes = {
  serie: PropTypes.object.isRequired,
};
// Export
export default SerieCard;
