// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import HomeStyled from './HomeStyled';

// == Composant

const Home = ({ series, name, serie }) => (
  <HomeStyled>
    {name.length>0 && (
      <Card.Group itemsPerRow={5} stackable>
      {serie.map((card) => {
          return (
        <SerieCard key={card.id} serie={card} />
        )
    })}
      </Card.Group>
    )}
    {name.length===0 && (
      <Card.Group itemsPerRow={5} stackable>
        {series.map((card) => {
            return (
              <SerieCard key={card.id} serie={card} />
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
  serie: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Home;
