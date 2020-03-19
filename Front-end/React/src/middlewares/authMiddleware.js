import axios from 'axios';

import {
  LOGIN,
  setUser,
} from 'src/actions/auth';
import {
  setUserPassword,
  PASSWORD,
} from 'src/actions/password';
import {
  setUserPasswordChange,
  PASSWORD_CHANGE,
} from 'src/actions/passwordChange';

// Fonction utilisée par les différents catch pour la gestion de l'erreur

// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    if (response.status === 200){
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.removeItem('error');
      store.dispatch(setUser(response.status, response.data));
      //console.log("200", response.data);
      window.location.reload()
    }
  };
  const handleError = (error) => {
    if (error === 400){
      sessionStorage.setItem("error400", error);
    }
    else if (error === 409){
      sessionStorage.setItem("error409", error);
    }
      sessionStorage.setItem("error", error);
      window.location.reload()
  };
  const saveUserPassword = (response) => {
    sessionStorage.setItem("status", response.status);
    store.dispatch(setUserPassword(response.status));
  };
  const saveUserPasswordChange = (response) => {
    if (response.status === 200){
      sessionStorage.setItem("status", response.status);
      sessionStorage.removeItem('error');
      sessionStorage.removeItem('error400');
      sessionStorage.removeItem('error409');
      store.dispatch(setUserPasswordChange(response.status));
      window.location.reload()
    }
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
        .catch(handleError);
      break;
    }
    default:
      break;
  }

  next(action);
};

export default ajaxMiddleware;
