// Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import TrendingStyled from './TrendingStyled';
import IMG from 'src/images/head.png';

// Composant

window.addEventListener('scroll', () =>{  
  var intScrollTop = window.scrollY;
  var y = 150;
  //var yMobile = 65;
  var opacity = ((y - intScrollTop) / y);
  //var opacityMobile = ((yMobile - intScrollTop) / yMobile);
  //console.log(opacityMobile);
  //console.log(opacity);
  document.querySelector(".head").style.opacity=opacity;
  //document.querySelector(".headMobile").style.opacity=opacityMobile;
});

const Trending = ({ series }) => (
  <TrendingStyled>
    <Header/>
    <div className="search">
      <MediaQuery minWidth={426}>
        <div className="head" 
        style={{
        backgroundImage: `url(${IMG})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-x'}}>
          <span className="neonStyle">Séries tendances</span>
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
      </MediaQuery>
      <MediaQuery maxWidth={425}>
        <div className="headMobile">
          <span className="neonStyleMobile">Séries tendances</span>
        </div>
        <Card.Group style={{justifyContent: 'center'}}>
          {series.map((card) => {
            if(!(card.poster_path === null)){
              return (
                <SerieCard key={card.id} serie={card} />
              )
            }
          })}
        </Card.Group>
      </MediaQuery>
    </div>
  </TrendingStyled>
);

Trending.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Trending;
