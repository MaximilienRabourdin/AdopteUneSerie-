// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import RecentStyled from './RecentStyled';

// == Composant

const Recent = ({ series }) => (
  <RecentStyled>
    <Header/>
    <div className="search">
      <p>Sorties récentes</p>
      <Card.Group style={{justifyContent: 'space-between'}}>
        {series.map((card) => {
          if(!(card.poster_path === null)){
            return (
              <SerieCard key={card.id} serie={card} />
            )
          }
        })}
      </Card.Group>
    </div>
  </RecentStyled>
);

Recent.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Recent;
