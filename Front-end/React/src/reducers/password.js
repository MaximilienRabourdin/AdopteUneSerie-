// Action Types
import { 
CHANGE_FIELD, 
SET_USER_PASSWORD, 
SET_ERROR,
} from 'src/actions/password';

// Initial State
const initialState = {
  email: '',
  status: 0,
  error:{},
};

// Reducer
const passwordReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        status: action.status,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default passwordReducer;
