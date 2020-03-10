// Import
  import { SAVE_SERIE_INFO } from 'src/actions/serieInfo';
// console.log(data);


// Initial State
const initialState = {
  series: [],
  inputName: '',
};

const serieInfoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIE_INFO:
      //console.log(action.serie);
     return {
        ...state, // state actuel
        serie: action.serie,
      };
    default:
     // console.log(state);
      return state;
  }
};

export default serieInfoReducer;
