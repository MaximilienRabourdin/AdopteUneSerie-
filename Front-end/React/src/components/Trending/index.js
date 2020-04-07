// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import TrendingStyled from './TrendingStyled';
import IMG from 'src/images/head.png';

// == Composant

const Trending = ({ series }) => (
  <TrendingStyled>
    <Header/>
    <div className="search">
      <div className="head" style={{backgroundImage: `url(${IMG})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'repeat-x',}}>
      SERIES TENDANCES
      </div>
      <Card.Group style={{justifyContent: 'center', marginTop: '210px'}}>
        {series.map((card) => {
          if(!(card.poster_path === null)){
            return (
              <SerieCard key={card.id} serie={card} />
            )
          }
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
