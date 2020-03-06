// Import
// import data from 'src/data/series';
import { SAVE_SERIES } from 'src/actions/series';
// console.log(data);

// Initial State
const initialState = {
  series: [],
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIES:
      return {
        ...state,
        series: action.series,
      };
    default:
      return state;
  }
};

export default homeReducer;
