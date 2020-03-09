// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Login from 'src/components/Login';
import Password from 'src/components/Password';
import Register from 'src/components/Register';
//import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header/>
    <Login/>
    <Password/>
    <Register/>
    <Footer />
  </AppStyled>
);

// == Export
export default App;


