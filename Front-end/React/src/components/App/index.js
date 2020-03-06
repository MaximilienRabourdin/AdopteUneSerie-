// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = ({ series, name }) => (
  <AppStyled>
    <Header />
    <Home cards={series}  name={name}/>
    <Footer />
  </AppStyled>
);


App.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
// == Export
export default App;
