import axios from 'axios';

import {
  LOGIN,
  setUser,
} from 'src/actions/auth';

// Fonction utilisée par les différents catch pour la gestion de l'erreur
const handleError = (error) => {
  console.log('Une erreur s\'est produite', error);
};

// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    console.log(response);
    store.dispatch(setUser(response.data.logged, response.data.info));
  };
  // En fonction de l'action, je réagis
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://209.182.238.244/projet-adopte-une-serie-api/public/api/login_check',
        withCredentials: true,
        headers: { 'Content-Type':'application/json' },
        data: {
          "username": state.login.email,
          "password": state.login.password,
        },
      })
        .then(saveUser)
        .catch(handleError);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
