// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from 'react-router-dom';

// == Import
import SerieInfo from 'src/containers/SerieInfo';
import Intro from 'src/components/Intro';
import Home from 'src/containers/Home';
import Trending from 'src/containers/Trending';
import TopRated from 'src/containers/TopRated';
import Recent from 'src/containers/Recent';
import Login from 'src/containers/Login';
import Password from 'src/containers/Password';
import Register from 'src/containers/Register';
import Contact from 'src/components/Contact';
import Cookie from 'src/components/Cookie';
import FAQ from 'src/components/FAQ';
import Notices from 'src/components/Notices';
import Account from 'src/components/Account';
//import Favorites from 'src/components/Favorites';
import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Switch>
      {/* on peut passer la prop component avec le composant
      si on a pas de data à transmettre */}
      <Route exact path="/" component={Intro} /> 
      <Route exact path="/Accueil" component={Home} />
      <Route exact path="/Tendances" component={Trending} />
      <Route exact path="/Mieux-Notees" component={TopRated} />
      <Route exact path="/Recentes" component={Recent} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/cookie" component={Cookie} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/mentions-legales" component={Notices} />
      <Route exact path="/inscription" component={Register} />
      <Route exact path="/connexion" component={Login} />
      <Route exact path="/mot-de-passe-oublié" component={Password} />
      <Route exact path="/serie/:slug" component={SerieInfo}/>
      <Route exact path="/mon-compte" component={Account} />
      {/*
      <Route exact path="/favoris" component={Favorites} /> */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
    <Footer />
  </AppStyled>
);

// == Export
export default App;
