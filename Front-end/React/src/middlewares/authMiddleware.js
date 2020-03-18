import axios from 'axios';

import {
  LOGIN,
  setUser,
} from 'src/actions/auth';
import {
  setUserPassword,
  PASSWORD,
} from 'src/actions/password';

// Fonction utilisée par les différents catch pour la gestion de l'erreur

// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    if (response.status === 200){
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.removeItem('error');
      store.dispatch(setUser(response.status, response.data));
      console.log("200", response.data);
      window.location.reload()
    }
  };
  const handleError = (error) => {
      sessionStorage.setItem("error", error);
      window.location.reload()
  };
  const saveUserPassword = (response) => {
    store.dispatch(setUserPassword(response.data));
  };
  // En fonction de l'action, je réagis
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://209.182.238.244/back/api/login_check',
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
    case PASSWORD: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://209.182.238.244/back/user/forget',
        withCredentials: true,
        headers: { 'Content-Type':'application/json' },
        data: {
          "email": state.login.email,
        },
      })
        .then(saveUserPassword)
        .catch(handleError);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
