import axios from 'axios';

import { 
LOAD_SERIES_TENDANCE, 
LOAD_SERIES_TOP_RATED, 
LOAD_SERIES_RECENT, 
saveSeriesTendance, 
saveSeriesTopRated, 
saveSeriesRecent,
} from 'src/actions/series';

import { 
LOAD_SERIES_FAVORITES, 
saveSeriesFavorites, 
} from 'src/actions/favorite';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIES_FAVORITES:
      axios({
        method: 'get',
        url: 'http://209.182.238.244/back/api/favorites',
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
      })
        // succès
        .then((response) => {
          store.dispatch(saveSeriesFavorites(response.data));
          // console.log(response.data)
        })
        // échec
        .catch((error) => {
        //  console.log('Une erreur s\'est produite', error);
        });

      // alternative à
      // axios.get('http://localhost:3001/recipes');
      break;
    case LOAD_SERIES_TENDANCE:
      axios({
        method: 'post',
        url: 'http://209.182.238.244/back/discover/trending',
      })
        // succès
        .then((response) => {
          store.dispatch(saveSeriesTendance(response.data));
        })
        // échec
        .catch((error) => {
          //console.log('Une erreur s\'est produite', error);
        });

      // alternative à
      // axios.get('http://localhost:3001/recipes');
      break;
      case LOAD_SERIES_TOP_RATED:
        axios({
          method: 'post',
          url: 'http://209.182.238.244/back/discover/top_rated/{1}',
        })
          // succès
          .then((response) => {
            store.dispatch(saveSeriesTopRated(response.data));
          })
          // échec
          .catch((error) => {
            //console.log('Une erreur s\'est produite', error);
          });
  
        // alternative à
        // axios.get('http://localhost:3001/recipes');
        break;
        case LOAD_SERIES_RECENT:
          axios({
            method: 'post',
            url: 'http://209.182.238.244/back/discover/recent/{1}',
          })
            // succès
            .then((response) => {
              store.dispatch(saveSeriesRecent(response.data));
            })
            // échec
            .catch((error) => {
              //console.log('Une erreur s\'est produite', error);
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
