// Import
import data from 'src/data/series';

console.log(data);

// Initial State
const initialState = {
  series: data.series,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
