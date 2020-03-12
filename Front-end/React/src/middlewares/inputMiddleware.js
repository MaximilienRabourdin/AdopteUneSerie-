import axios from 'axios';

import { LOAD_SERIE_INPUT, saveSerieInput } from 'src/actions/input';

const infoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIE_INPUT:
      //console.log(action.value);
      axios.get('http://209.182.238.244/projet-adopte-une-serie-api/public/search/' + action.value)
        // succès
        .then((response) => {
         // console.log(action.response);
          store.dispatch(saveSerieInput(response.data));
        })
        // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
        });

      // alternative à
      // axios.get('http://localhost:3001/recipes');
      break;

    default:
      break;
  }
  // Passes à ton voisin
  next(action);
};

export default infoMiddleware;
