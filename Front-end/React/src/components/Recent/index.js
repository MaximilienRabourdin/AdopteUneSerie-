// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import RecentStyled from './RecentStyled';
import IMG from 'src/images/head.png';

// == Composant

window.addEventListener('scroll', () =>{  
  var intScrollTop = window.scrollY;
  var y = 150;
  var opacity = ((y - intScrollTop) / y);
  document.querySelector(".head").style.opacity=opacity;
});

const Recent = ({ series }) => (
  <RecentStyled>
    <Header/>
    <div className="search">
      <div className="head" style={{backgroundImage: `url(${IMG})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundRepeat: 'repeat-x'}}>
      <span className="neonStyle">Sorties récentes</span>
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
  </RecentStyled>
);

Recent.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Recent;
