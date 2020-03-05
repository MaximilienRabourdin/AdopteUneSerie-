import axios from 'axios';

import { LOAD_RECIPES, saveRecipes } from 'src/actions/recipe';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      axios({
        method: 'get',
        url: 'http://localhost:3001/recipes',
      })
        // succès
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
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

export default ajaxMiddleware;
