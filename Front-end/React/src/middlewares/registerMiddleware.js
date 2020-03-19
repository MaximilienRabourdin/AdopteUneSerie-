import axios from 'axios';

import {
  REGISTER,
  setUser,
  setError,
} from 'src/actions/register';


// Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
  // Fonction utilisée pour sauvegarder l'utilisateur dans le store via le then
  const saveUser = (response) => {
    if (response.status === 200){
      sessionStorage.setItem("data", response.status);
      sessionStorage.removeItem('error400');
      sessionStorage.removeItem('error409');
      sessionStorage.removeItem('error');
      store.dispatch(setUser(response.status, response.data));
      //console.log("200", response.data);
      window.location.reload()
    }
  };
  const handleError = (errors) => {
    if (errors === 400){
      sessionStorage.setItem("error400", errors);
    }
    else if (errors === 409){
      sessionStorage.setItem("error409", errors);
    }
      sessionStorage.setItem("errors", errors);
      store.dispatch(setError(errors));
      window.location.reload()
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
