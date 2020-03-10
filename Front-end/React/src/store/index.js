import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
//import infoMiddleware from 'src/middlewares/infoMiddleware';

// reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
      ajaxMiddleware,
     // infoMiddleware,
    // ... middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
