// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/components/Home/SerieCard';
import HomeStyled from './HomeStyled';

// == Composant

const Home = ({ series, name }) => (
  <HomeStyled>
    {name.length>0 && (
      <Card.Group itemsPerRow={5} stackable>
        {series.map((card) => {
          if (card.name === name){
            return (
              <SerieCard key={card.id} {...card} />
            )
          };
        })}
      </Card.Group>
    )}
    {name.length===0 && (
      <Card.Group itemsPerRow={5} stackable>
        {series.map((card) => {
            return (
              <SerieCard key={card.id} {...card} />
            )
        })}
      </Card.Group>
    )}
  </HomeStyled>
);

Home.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default Home;
