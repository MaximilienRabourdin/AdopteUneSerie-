import axios from 'axios';

import {
  LOGIN,
  setUser,
  setError,
} from 'src/actions/auth';
import {
  setUserPassword,
  PASSWORD,
  setErrorPassword,
} from 'src/actions/password';
import {
  setUserPasswordChange,
  PASSWORD_CHANGE,
  setErrorPasswordChange,
} from 'src/actions/passwordChange';

// Fonction utilisée par les différents catch pour la gestion de l'erreur

// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    if (response.status === 200){
      sessionStorage.setItem("token", response.data.token);    
      store.dispatch(setUser(response.status, response.data));
      //console.log("200", response.data);
      window.location.href = "/Accueil";
    }
  };
  const handleErrorLogin = (error) => {
    store.dispatch(setError(error.response));
  };
  const handleErrorPassword = (error) => {
    store.dispatch(setErrorPassword(error.response));
  };
  const handleErrorPasswordChange = (error) => {
    store.dispatch(setErrorPasswordChange(error.response));
  };

  const saveUserPassword = (response) => {
    store.dispatch(setUserPassword(response.status));
    window.location.href = "/Accueil";
  };
  const saveUserPasswordChange = (response) => {
      store.dispatch(setUserPasswordChange(response.status));
      window.location.href = "/Accueil";
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
        .catch(handleErrorLogin);
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
        .catch(handleErrorPassword);
      break;
    }
    case PASSWORD_CHANGE: {
      const state = store.getState();

      axios({
        method: 'post',
        url: 'http://209.182.238.244/back/api/new_password',
        withCredentials: true,
        headers: { Authorization: `Bearer ${action.token}` },
        data: {
          "actual_password": state.passwordChange.password,
          "plainPassword": state.passwordChange.newPassword,
        },
      })
        .then(saveUserPasswordChange)
        .catch(handleErrorPasswordChange);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
