import { combineReducers } from 'redux';

import homeReducer from './home';
import serieInfoReducer from './serieInfo';
import loginReducer from './login';
import registerReducer from './register';
import passwordReducer from './password';
import passwordChangeReducer from './passwordChange';
import accountReducer from './account';

const rootReducer = combineReducers({
  home: homeReducer,
  serie: serieInfoReducer,
  login: loginReducer,
  register: registerReducer,
  password: passwordReducer,
  passwordChange: passwordChangeReducer,
  account: accountReducer
  // ... autres reducers
});

export default rootReducer;
