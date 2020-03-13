import axios from 'axios';

import {
  PASSWORD,
  setUser,
} from 'src/actions/password';

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
    case PASSWORD: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://localhost:3001/register',
        withCredentials: true,
        data: {
          email: state.register.email,
          password: state.register.password,
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


