// Import
import { SAVE_CHECK, SAVE_ADD, SAVE_DELETE} from 'src/actions/favorite';
// console.log(data);


// Initial State
const initialState = {
  status: 0,
  statusAdd:0,
  statusDelete:0,
};

const favoriteReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHECK:
      //console.log(action.serie);
     return {
        ...state, // state actuel
        status: action.status,
      };
      case SAVE_ADD:
        //console.log(action.serie);
       return {
          ...state, // state actuel
          statusAdd: action.statusAdd,
        };
        case SAVE_DELETE:
          //console.log(action.serie);
         return {
            ...state, // state actuel
            statusDelete: action.statusDelete,
          };
    default:
     // console.log(state);
      return state;
  }
};

export default favoriteReducer;
