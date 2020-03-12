import { combineReducers } from 'redux';

import homeReducer from './home';
import serieInfoReducer from './serieInfo';
import loginReducer from './login';
import registerReducer from './register';

const rootReducer = combineReducers({
  home: homeReducer,
  serie: serieInfoReducer,
  login: loginReducer,
  register: registerReducer
  // ... autres reducers
});

export default rootReducer;
