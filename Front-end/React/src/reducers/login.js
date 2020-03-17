import { CHANGE_FIELD, SET_USER } from 'src/actions/auth';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  password: '',
  status: '',
  data: {},
};

// Reducer
const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
      case SET_USER:
        return {
          ...state,
          status: action.status,
          data: action.data,
        };
    default:
      return state;
  }
};

export default loginReducer;
