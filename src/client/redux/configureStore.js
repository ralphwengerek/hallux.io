/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import apiMiddleWare from './middleware/apiMiddleWare';
import rootReducer from './reducers';
import initialState from './initialState';
import { loadState, saveState } from '../utils/localStorage';

const configureStore = () => {
  let composeEnhancers = compose;

  const middlewares = [thunk, apiMiddleWare];

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(logger);
  }

  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState || initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
