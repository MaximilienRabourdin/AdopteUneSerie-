import axios from 'axios';

import { ACCOUNT, saveUserInfo } from 'src/actions/account';

const accountMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ACCOUNT: 
      console.log('middleware', action.token);
      axios({
        method: 'get',
        url: 'http://209.182.238.244/back/api/myprofile',
        headers: { Authorization: `Bearer ${action.token}` },
      })
        // succès
        .then((response) => {
          store.dispatch(saveUserInfo(response.data));
          console.log('response middleware', response.data)
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

export default accountMiddleware;
