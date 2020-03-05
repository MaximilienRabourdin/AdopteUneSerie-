// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <Home />
    <Footer />
  </AppStyled>
);

// == Export
export default App;
