// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import Criteria from './Criteria';
import HomeStyled from './HomeStyled';

// == Composant

const Home = ({ cards, name }) => (
  <HomeStyled>
    <Card.Group itemsPerRow={5} stackable>
      {cards.map((card) => {
        if (card.name === name){
          return (
            <Criteria key={card.id} {...card} />
          )
        }
      })}
    </Card.Group>
  </HomeStyled>
);

Home.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default Home;
