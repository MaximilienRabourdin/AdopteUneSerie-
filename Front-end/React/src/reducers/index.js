import { combineReducers } from 'redux';

import homeReducer from './home';
import nameReducer from './name';

const rootReducer = combineReducers({
  home: homeReducer,
  name: nameReducer,
  // ... autres reducers
});

export default rootReducer;
