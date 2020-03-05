// == Import npm
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import Criteria from './Criteria';
import HomeStyled from './HomeStyled';

// == Composant

const Home = ({ cards }) => (
  <HomeStyled>
    <Card.Group itemsPerRow={3} stackable>
      {cards.map((card) => (
        <Criteria {...card} />
      ))}
    </Card.Group>
  </HomeStyled>
);

Home.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Home;
