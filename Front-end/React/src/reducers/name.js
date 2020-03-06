/* eslint-disable no-console */

import {
  SEND_NEW_NAME_SERIE,
} from 'src/actions/name';

const initialState = {
  loading: false,
  // ...
  inputName: '',
};

// Reducer
const nameReducer = (state = initialState, action = {}) => {
  // console.log('name reducer : ', action);

  switch (action.type) {
    case SEND_NEW_NAME_SERIE:
      return {
        ...state, // state actuel
        inputName: action.value,
      };
    // entré dans aucune action : je retourne le state sans modif
    default:
      return state;
  }
};

export default nameReducer;
