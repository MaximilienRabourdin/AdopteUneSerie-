// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import TopRatedStyled from './TopRatedStyled';

// == Composant

const TopRated = ({ series }) => (
  <TopRatedStyled>
    <Header/>
    <div className="search">
     <p>Séries les mieux notées</p>
        <Card.Group style={{justifyContent: 'center'}}>
          {series.map((card) => {
            if(!(card.poster_path === null)){
              return (
                <SerieCard key={card.id} serie={card} />
              )
            }
          })}
        </Card.Group>
    </div>
  </TopRatedStyled>
);

TopRated.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TopRated;
