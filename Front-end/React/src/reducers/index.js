import { combineReducers } from 'redux';

import homeReducer from './home';
import serieInfoReducer from './serieInfo';
import loginReducer from './login';
import registerReducer from './register';
import passwordReducer from './password';
import passwordChangeReducer from './passwordChange';
import accountReducer from './account';
import favoriteReducer from './favorite';

const rootReducer = combineReducers({
  home: homeReducer,
  serie: serieInfoReducer,
  login: loginReducer,
  register: registerReducer,
  password: passwordReducer,
  passwordChange: passwordChangeReducer,
  account: accountReducer,
  favorite: favoriteReducer,
  // ... autres reducers
});

export default rootReducer;
