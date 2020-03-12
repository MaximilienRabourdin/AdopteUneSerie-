import { combineReducers } from 'redux';

import homeReducer from './home';
import loginReducer from './login';
import registerReducer from './register';


const rootReducer = combineReducers({
  home: homeReducer,
  login: loginReducer,
  register: registerReducer
  // ... autres reducers
});

export default rootReducer;
