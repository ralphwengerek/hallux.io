/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import initialState from './initialState';
import { loadState, saveState } from '../utils/localStorage';

const addLoggingToStore = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c action', 'color: gray', action);
    console.log('%c prev state', 'color: blue', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const persistedState = loadState();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    persistedState || initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToStore(store);
  }

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
