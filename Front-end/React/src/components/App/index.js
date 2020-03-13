// == Import npm
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import
import Header from 'src/components/Header';
import Login from 'src/containers/Login';
//import Password from 'src/containers/Password';
import Register from 'src/containers/Register';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';


// == Composant
const App = () => (
  
  <AppStyled>
    <Header />
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/connexion" component={Login}/>
        <Route exact path="/inscription" component={Register}/>

        {/*<Route exact path="/mot-de-passe" component={Password}/>
        {/* Redirection : ancienne url => nouvelle url 
        <Redirect from="/join" to="/register" />
        {/* Si aucune route précédente n'a matchée ...  
        <Redirect to="/login" /> 
    */}
      </Switch>
    <Footer />
  </AppStyled>
);

// == Export
export default App;



