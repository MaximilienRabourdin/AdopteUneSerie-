import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import ajaxMiddleware from 'src/middlewares/ajaxMiddleware';
import infoMiddleware from 'src/middlewares/infoMiddleware';
import inputMiddleware from 'src/middlewares/inputMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import registerMiddleware from 'src/middlewares/registerMiddleware';

// reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    ajaxMiddleware,
    infoMiddleware,
    inputMiddleware,
    authMiddleware,
    registerMiddleware,
    // ... middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
