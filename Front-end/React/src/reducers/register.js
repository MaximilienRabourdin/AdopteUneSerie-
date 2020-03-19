import { CHANGE_FIELD, SET_USER, SET_ERROR } from 'src/actions/register';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  password: '',
  confirmPassword:'',
  firstname: '',
  lastname: '',
  status: 0,
  data: {},
  error:{},
};

// Reducer
const registerReducer = (state = initialState, action = {}) => {
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
        case SET_ERROR:
          return {
            ...state,
            error: action.error,
          };
    default:
      return state;
  }
};

export default registerReducer;
