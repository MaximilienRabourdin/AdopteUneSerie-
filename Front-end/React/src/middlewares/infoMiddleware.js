import axios from 'axios';

import { LOAD_SERIE_INFO, saveSerieInfo, setLoad} from 'src/actions/serieInfo';
import { LOAD_CHECK,  saveCheck, ADD_SERIE, saveAdd, DELETE_SERIE, saveDelete  } from 'src/actions/favorite';

const infoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SERIE_INFO:
     //console.log("action middleware", action.id);
      axios.get('http://209.182.238.244/back/show/' + action.id)
        // succès
        .then((response) => {
          //console.log("response middleware",response.data);
          store.dispatch(saveSerieInfo(response.data));
          store.dispatch(setLoad(true));
        })
        // échec
        .catch((error) => {
          console.log('Une erreur s\'est produite', error);
        });
      break;
      case LOAD_CHECK:
       //console.log("action middleware", sessionStorage.getItem('token'));
       axios({
        method: 'get',
        url: 'http://209.182.238.244/back/api/favorites/' + action.id + '/check',
        withCredentials: true,
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
      })
          .then((response) => {
            //console.log("response middleware",response.status);
            store.dispatch(saveCheck(response.status));
          })
          // échec
          .catch((error) => {
            console.log('Une erreur s\'est produite', error);
          });
        break;
        case ADD_SERIE:
         //console.log("action middleware", sessionStorage.getItem('token'));
         axios({
          method: 'get',
          url: 'http://209.182.238.244/back/api/favorites/' + action.id + '/add',
          withCredentials: true,
          headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
        })
            .then((response) => {
              //console.log("response middleware",response.status);
              store.dispatch(saveAdd(response.status));
              window.location.reload()
            })
            // échec
            .catch((error) => {
              console.log('Une erreur s\'est produite', error);
            });
          break;
          case DELETE_SERIE:
           //console.log("action middleware", sessionStorage.getItem('token'));
           axios({
            method: 'get',
            url: 'http://209.182.238.244/back/api/favorites/' + action.id + '/delete',
            withCredentials: true,
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
          })
              .then((response) => {
                //console.log("response middleware",response.status);
                store.dispatch(saveDelete(response.status));
                window.location.reload()
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
