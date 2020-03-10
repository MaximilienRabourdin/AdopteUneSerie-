import { combineReducers } from 'redux';

import homeReducer from './home';
import serieInfoReducer from './serieInfo';

const rootReducer = combineReducers({
  home: homeReducer,
  serie: serieInfoReducer,
  // ... autres reducers
});

export default rootReducer;
