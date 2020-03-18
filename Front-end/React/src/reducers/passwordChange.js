import { CHANGE_FIELD, SET_USER_PASSWORD_CHANGE } from 'src/actions/passwordChange';

// Action Types

// Initial State
// state.auth....
const initialState = {
  password: '',
  newPassword: '',
  data: 0,
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
          data: action.data,
        };
    default:
      return state;
  }
};

export default passwordChangeReducer;
