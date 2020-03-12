import { CHANGE_FIELD } from 'src/actions/register';

// Action Types

// Initial State
// state.auth....
const initialState = {
  email: '',
  password: '',
  confirmPassword:'',
  firstname: '',
  lastname: '',
};

// Reducer
const registerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default registerReducer;
