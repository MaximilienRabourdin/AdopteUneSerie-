// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/Header';
import IMG from 'src/images/head.png';
import CategoriesStyled from './CategoriesStyled';

// Composant
const Categories = ({
  series,
  title,
}) => {
// Scroll animation
  window.addEventListener('scroll', () => {
    const intScrollTop = window.scrollY;
    const y = 150;
    const opacity = ((y - intScrollTop) / y);
    document.querySelector('.head').style.opacity = opacity;
  });
  return (
    <CategoriesStyled>
      <Header />
      <div className="search">
        <MediaQuery minWidth={426}>
          <div
            className="head"
            style={{
              backgroundImage: `url(${IMG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'repeat-x',
            }}
          >
            <span className="neonStyle">{title}</span>
          </div>
          <Card.Group
            style={{
              justifyContent: 'center',
              marginTop: '210px',
            }}
          >
            {series.map((card) => {
              if (!(card.poster_path === null)) {
                return (
                  <SerieCard
                    key={card.id}
                    serie={card}
                  />
                );
              }
            })}
          </Card.Group>
        </MediaQuery>
        <MediaQuery maxWidth={425}>
          <div className="headMobile">
            <span className="neonStyleMobile">{title}</span>
          </div>
          <Card.Group style={{ justifyContent: 'center' }}>
            {series.map((card) => {
              if (!(card.poster_path === null)) {
                return (
                  <SerieCard key={card.id} serie={card} />
                );
              }
            })}
          </Card.Group>
        </MediaQuery>
      </div>
    </CategoriesStyled>
  );
};

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Categories;
