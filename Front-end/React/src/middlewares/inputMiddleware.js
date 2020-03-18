import axios from 'axios';

import { LOAD_SERIE_INPUT,LOAD_SERIE_DROPDOWN, saveSerieInput } from 'src/actions/input';

const infoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIE_INPUT:
      //console.log(action.value);
      axios.get('http://209.182.238.244/back/search/' + action.value)
        // succès
        .then((response) => {
         // console.log(action.response);
          store.dispatch(saveSerieInput(response.data));
        })
        // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
        });
        case LOAD_SERIE_DROPDOWN:
          axios({
            method: 'post',
            url: 'http://209.182.238.244/back/discover/standard/',
            data: {
              "first_air_date.gte":"",
              "first_air_date.lte":"",
              "first_air_date_year":"",
              "vote_average":action.note,
              "with_genres":action.genres,
              "with_networks":action.network,
              "with_runtime.lte":action.time,
              "page_number":""
            }
          })
            // succès
            .then((response) => {
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
