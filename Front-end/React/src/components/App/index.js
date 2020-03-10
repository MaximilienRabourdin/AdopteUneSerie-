// == Import npm
import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Login from 'src/components/Login';
import Password from 'src/components/Password';
import Register from 'src/components/Register';
//import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => {
  // const [email, setEmail] = useState('');

  const [fields, setFields] = useState({});

  const changeField = (name, value) => {
    // console.log(name, value);
    // Je remplace le state actuel
    // Je remplace l'objet fields par un nouvel objet fields
    setFields({
      // Je déverse l'objet actuel
      ...fields,
      // je veux changer la valeur du champ
      [name]: value,
    });
  };

  return (
  
  <AppStyled>
    <Header />
    <Switch>
        <Route exact path="/login">
          <Login
            fields={fields}
            changeField={changeField}
          />
        </Route>
        <Route exact path="/password">
          <Password
            fields={fields}
            changeField={changeField}
          />
        </Route>
        <Route exact path="/register">
        <Register
            fields={fields}
            changeField={changeField}
          />
        </Route>
        {/* Redirection : ancienne url => nouvelle url */}
        <Redirect from="/join" to="/register" />
        {/* Si aucune route précédente n'a matchée ...  */}
        <Redirect to="/login" />
      </Switch>
    <Footer />
  </AppStyled>
);
};

// == Export
export default App;


