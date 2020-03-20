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
      store.dispatch(setUser(response.status, response.data));
      //window.location.reload()
      window.location.href = "/Accueil";
    }
  };
  const handleError = (error) => {
      store.dispatch(setError(error.response));
      //console.log(error.response)
      
   // window.location.reload()
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
