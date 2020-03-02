// == Import npm
import React from 'react';

// == Import
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';
import 'semantic-ui-css/semantic.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
  



// == Composant
const App = () => (
  <AppStyled>
    <Footer />
  </AppStyled>
);

// == Export
export default App;
