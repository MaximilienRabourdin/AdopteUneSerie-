// Import
import { SAVE_CHECK, SAVE_SERIES_FAVORITES} from 'src/actions/favorite';
// console.log(data);


// Initial State
const initialState = {
  status: 0,
  seriesFavorites:[],
};

const favoriteReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIES_FAVORITES:
      //console.log(action.series);
     return {
        ...state, // state actuel
        seriesFavorites: action.series,
      };
    case SAVE_CHECK:
      //console.log(action.serie);
      return {
        ...state, // state actuel
        status: action.status,
      };
    default:
     // console.log(state);
      return state;
  }
};

export default favoriteReducer;
