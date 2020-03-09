// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import SerieInfo from 'src/containers/SerieInfo';
import Home from 'src/containers/Home';
//import SignUp from 'src/containers/SignUp';
//import SignIn from 'src/containers/SignIn';
import Contact from 'src/components/Contact';
import Cookie from 'src/components/Cookie';
import FAQ from 'src/components/FAQ';
import Notices from 'src/components/Notices';
//import Account from 'src/components/Account';
//import Favorites from 'src/components/Favorites';
import NotFound from 'src/components/NotFound';
//import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header/>
    <Switch>
      {/* on peut passer la prop component avec le composant
      si on a pas de data à transmettre */}
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/cookie" component={Cookie} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/mentions-legales" component={Notices} />
      <Route exact path="/:slug" component={SerieInfo} />
      {/*<Route exact path="/inscription" component={SignUp} />
      <Route exact path="/connexion" component={SignIn} />
      <Route exact path="/mon-compte" component={Account} />
      <Route exact path="/favoris" component={Favorites} /> */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
    {/*<Footer /> */}
  </AppStyled>
);

// == Export
export default App;
