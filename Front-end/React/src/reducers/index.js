import { combineReducers } from 'redux';

import homeReducer from './home';
import serieInfoReducer from './serieInfo';
import loginReducer from './login';
import registerReducer from './register';
import passwordReducer from './password';
import accountReducer from './account';

const rootReducer = combineReducers({
  home: homeReducer,
  serie: serieInfoReducer,
  login: loginReducer,
  register: registerReducer,
  password: passwordReducer,
  account: accountReducer
  // ... autres reducers
});

export default rootReducer;
