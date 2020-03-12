// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/components/HeaderSearch';
import HomeStyled from './HomeStyled';

// == Composant

const Home = ({ series, name, serieInput, change }) => (
  <HomeStyled>
    <Header/>
    <div className="search">
      {(change || name.length>0) && (
        <Card.Group itemsPerRow={5} stackable>
        {serieInput.map((card) => {
            return (
          <SerieCard key={card.id} serie={card} />
          )
        })
        }
        </Card.Group>
      )}
      {(!change && name.length === 0) && (
        <Card.Group itemsPerRow={5} stackable>
          {series.map((card) => {
              return (
                <SerieCard key={card.id} serie={card} />
              )
          })}
        </Card.Group>
      )}
    </div>
  </HomeStyled>
);

Home.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.bool.isRequired,
  serieInput: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Home;
