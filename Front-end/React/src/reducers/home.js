// Import
import { SAVE_SERIES } from 'src/actions/series';
import { SAVE_SERIE_INPUT} from 'src/actions/input';
// console.log(data);

import {
  SAVE_SERIE,
} from 'src/actions/name';
  

// Initial State
const initialState = {
  series: [],
  inputName: '',
  serieInput: [],
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIES:
      //console.log(action.series);
     return {
        ...state, // state actuel
        series: action.series,
      };
    case SAVE_SERIE_INPUT:
     // console.log(action.serieInput);
      return {
        ...state, // state actuel
        serieInput: action.serieInput,
      };
    case SAVE_SERIE:
      return {
        ...state, // state actuel
       inputName: action.value,
      };
    default:
     // console.log(state);
      return state;
  }
};

export default homeReducer;
