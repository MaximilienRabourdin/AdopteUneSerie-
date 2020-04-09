// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import TopRatedStyled from './TopRatedStyled';
import IMG from 'src/images/head.png';

// == Composant

window.addEventListener('scroll', () =>{  
  var intScrollTop = window.scrollY;
  var y = 150;
  var opacity = ((y - intScrollTop) / y);
  document.querySelector(".head").style.opacity=opacity;
});

const TopRated = ({ series }) => (
  <TopRatedStyled>
    <Header/>
    <div className="search">
        <MediaQuery minWidth={426}>
      <div className="head" style={{backgroundImage: `url(${IMG})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'repeat-x'}}>
          <span className="neonStyle">Séries les mieux notées</span>ry>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={425}>
        <div className="headMobile">
          <span className="neonStyleMobile">Séries les mieux notées</span>
      </div>
        </MediaQuery>
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
