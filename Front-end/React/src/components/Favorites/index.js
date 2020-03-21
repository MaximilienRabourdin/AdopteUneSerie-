// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/components/SerieCard';
import FavoritesStyled from './FavoritesStyled';
import Header from 'src/containers/Header';

// == Composant
const Favorites = ({ series }) => (
  <FavoritesStyled>
    <Header/>
    <div className="search">
      <p>Mes favoris</p>
        <Card.Group style={{justifyContent: 'center'}}>
          {series.map((card) => {
            return (
              <SerieCard key={card.tmdb_id} serie={card} />
            )
          })}
        </Card.Group>
    </div>
  </FavoritesStyled>
);

Favorites.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};


// == Export
export default Favorites;
