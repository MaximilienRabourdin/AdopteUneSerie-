import axios from 'axios';

import {
  REGISTER,
  setUser,
} from 'src/actions/register';

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
    case REGISTER: {
      const state = store.getState();
      //console.log("firstname", state.register.firstname);

      axios({
        method: 'post',
        url: 'http://209.182.238.244/back/user/new',
        withCredentials: true,
        data: {
          firstname: state.register.firstname,
          lastname: state.register.lastname,
          email: state.register.email,
          plainPassword: state.register.password,
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
