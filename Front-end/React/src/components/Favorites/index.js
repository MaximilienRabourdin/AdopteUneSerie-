// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// Import
import SerieCard from 'src/components/SerieCard';
import FavoritesStyled from './FavoritesStyled';
import Header from 'src/containers/Header';
import IMG from 'src/images/head.png';

// Scroll animation
window.addEventListener('scroll', () =>{  
  var intScrollTop = window.scrollY;
  var y = 150;
  var opacity = ((y - intScrollTop) / y);
  document.querySelector(".head").style.opacity=opacity;
});

const Favorites = ({ series }) => (
  <FavoritesStyled>
    <Header/>
    <div className="search">
    <div className="head" style={{
    backgroundImage: `url(${IMG})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat-x',
    }}>
    <span className="neonStyle">Mes favoris</span>
    </div>
      <Card.Group style={{
        justifyContent: 'center',
        marginTop: '210px',
      }}>
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


// Export
export default Favorites;
