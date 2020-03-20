import { CHANGE_FIELD, SET_USER_PASSWORD_CHANGE, SET_ERROR } from 'src/actions/passwordChange';

// Action Types

// Initial State
// state.auth....
const initialState = {
  password: '',
  newPassword: '',
  status: 0,
  error:{},
};

// Reducer
const passwordChangeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
      case SET_USER_PASSWORD_CHANGE:
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

export default passwordChangeReducer;
