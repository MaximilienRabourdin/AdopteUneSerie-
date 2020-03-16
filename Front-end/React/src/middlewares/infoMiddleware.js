import axios from 'axios';

import { LOAD_SERIE_INFO, saveSerieInfo } from 'src/actions/serieInfo';

const infoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIE_INFO:
     //console.log("action middleware", action.id);
      axios.get('http://209.182.238.244/projet-adopte-une-serie-api/public/show/' + action.id)
        // succès
        .then((response) => {
          //console.log("response middleware",response.data);
          store.dispatch(saveSerieInfo(response.data));
        })
        // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
        });
      break;

    default:
      break;
  }
  // Passes à ton voisin
  next(action);
};

export default infoMiddleware;
