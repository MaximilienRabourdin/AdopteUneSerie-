// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/components/Header';
import TrendingStyled from './TrendingStyled';

// == Composant

const Trending = ({ series }) => (
  <TrendingStyled>
    <Header/>
    <div className="search">
     <p>Séries Tendances</p>
        <Card.Group itemsPerRow={5} stackable>
          {series.map((card) => {
              return (
                <SerieCard key={card.id} serie={card} />
              )
          })}
        </Card.Group>
    </div>
  </TrendingStyled>
);

Trending.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Trending;
