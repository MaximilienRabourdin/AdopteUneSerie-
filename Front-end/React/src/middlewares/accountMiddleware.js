import axios from 'axios';

import { ACCOUNT, saveUserInfo } from 'src/actions/account';

const accountMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ACCOUNT:
  console.log(action.value);
          axios({
            method: 'post',
            url: 'http://209.182.238.244/back/api/myprofile',
            data: {
              "token": action.value,
            }
          })
            // succès
            .then((response) => {
              store.dispatch(saveUserInfo(response.data));
              //console.log(response.data)
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
