import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
// import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';

// reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    registerMiddleware,
    //  ajaxMiddleware,
    // ... middlewares
  ),
);

const store = createStore(
  rootReducer,
 // enhancers,
);

export default store;
