// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
import App from 'src/components/App';
import store from 'src/store';

import { loadSeriesTendance, loadSeriesTopRated, loadSeriesRecent } from 'src/actions/series';
//import { loadSerieInfo } from 'src/actions/serieInfo';
// Charge les data depuis l'api
 store.dispatch(loadSeriesTendance());
 store.dispatch(loadSeriesTopRated());
 store.dispatch(loadSeriesRecent());
 //store.dispatch(loadSerieInfo());
// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
