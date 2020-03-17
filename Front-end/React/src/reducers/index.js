import { combineReducers } from 'redux';

import homeReducer from './home';
import serieInfoReducer from './serieInfo';
import loginReducer from './login';
import registerReducer from './register';
import passwordReducer from './password';

const rootReducer = combineReducers({
  home: homeReducer,
  serie: serieInfoReducer,
  login: loginReducer,
  register: registerReducer,
  password: passwordReducer
  // ... autres reducers
});

export default rootReducer;
