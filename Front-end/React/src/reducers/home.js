// Import
import data from 'src/data/series';
//  import { SAVE_SERIES } from 'src/actions/series';
// console.log(data);

import {
  SAVE_SERIE,
  SEARCH } from 'src/actions/name';
  

// Initial State
const initialState = {
  series: data.series,
  //series: [],
  inputName: '',
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
   // case SAVE_SERIES:
      //console.log(action.series);
   //  return {
    //    ...state, // state actuel
    //    series: action.series,
    //  };
    case SAVE_SERIE:
      return {
        ...state, // state actuel
        inputName: action.value,
      };
    case SEARCH:      
      return {
        ...state, // state actuel
        series: data.series,
      };
    default:
     // console.log(state);
      return state;
  }
};

export default homeReducer;
