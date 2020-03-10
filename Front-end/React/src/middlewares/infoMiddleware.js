import axios from 'axios';

import { LOAD_SERIE_INFO, saveSerieInfo } from 'src/actions/serieInfo';

const infoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIE_INFO:
      axios({
        method: 'get',
        url: 'http://209.182.238.244/projet-adopte-une-serie-api/search/${action.value}',
      })
        // succès
        .then((response) => {
          store.dispatch(saveSerieInfo(response.data));
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
