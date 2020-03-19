import { CHANGE_FIELD, SET_USER_PASSWORD } from 'src/actions/password';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  status: 0,
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
    default:
      return state;
  }
};

export default passwordReducer;
