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
      sessionStorage.removeItem("firstname");
      sessionStorage.removeItem("lastname");
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("password");
      sessionStorage.removeItem("error409");
      sessionStorage.removeItem('error');
      store.dispatch(setUser(response.status, response.data));
      window.location.reload()
    }
  };
  const handleError = (error) => {
     {(error.response.status == 400) &&
      sessionStorage.setItem("firstname", error.response.data.errors.firstname);
      sessionStorage.setItem("lastname", error.response.data.errors.lastname);
      sessionStorage.setItem("email", error.response.data.errors.email);
      sessionStorage.setItem("password", error.response.data.errors.plainPassword);
    }
    {(error.response.status == 409) &&
      sessionStorage.setItem("error409", error.response.status);
    }
      store.dispatch(setError(error.response.data));
      
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
