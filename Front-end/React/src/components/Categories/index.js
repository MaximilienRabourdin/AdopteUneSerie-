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
    // console.log(intScrollTop);
    const y = 150;
    const opacity = ((y - intScrollTop) / y);
    document.querySelector('.head').style.opacity = opacity;
  });
  return (
    <CategoriesStyled>
      <Header />
      <div className="search">
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
