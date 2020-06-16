// Action Types
import { 
SAVE_SERIE_INFO,
SET_LOAD,
} from 'src/actions/serieInfo';
// console.log(data);

// Initial State
const initialState = {
  serie: [],
  load: false,
};

const serieInfoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIE_INFO:
      //console.log(action.serie);
     return {
        ...state, // state actuel
        serie: action.serie,
      };
    case SET_LOAD:
      //console.log(action.serie);
      return {
        ...state, // state actuel
        load: action.load,
      };
    default:
     // console.log(state);
      return state;
  }
};

export default serieInfoReducer;
