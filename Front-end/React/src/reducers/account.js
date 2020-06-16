import { SAVE_USER_INFO } from 'src/actions/account';

// Initial State
const initialState = {
  data: {},
};

// Reducer
const accountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default accountReducer;
