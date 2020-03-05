import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
// import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';

// reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    //  ajaxMiddleware,
    // ... middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
