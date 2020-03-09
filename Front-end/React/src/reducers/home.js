// Import
 import data from 'src/data/series';
// import { SAVE_SERIES } from 'src/actions/series';
// console.log(data);

import {
  SAVE_INPUT,
  SEARCH } from 'src/actions/name';

// Initial State
const initialState = {
  series: data.series,
  inputName: '',
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INPUT:
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
