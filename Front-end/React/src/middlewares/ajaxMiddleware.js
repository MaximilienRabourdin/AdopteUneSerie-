import axios from 'axios';

import { LOAD_SERIES, saveSeries } from 'src/actions/series';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIES:
      axios({
        method: 'post',
        url: 'http://209.182.238.244/projet-adopte-une-serie-api/public/discover/standard/',
        data: {
          "first_air_date.gte":"",
          "first_air_date.lte":"",
          "first_air_date_year":"",
          "vote_average":"",
          "with_genres":"",
          "with_networks":"1024",
          "with_runtime.lte":""
        }
      })
        // succès
        .then((response) => {
          store.dispatch(saveSeries(response.data));
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

export default ajaxMiddleware;
