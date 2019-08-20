/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import apiMiddleWare from './middleware/apiMiddleWare';
import postMiddleWare from './middleware/postMiddleware';
import serviceMiddleware from './middleware/serviceMiddleware';
import userMiddleware from './middleware/userMiddleware';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers';
import { loadState, saveState } from '../utils/localStorage';
import AuthService from '../utils/AuthService';
import initialState from './initialState';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/userActions';

export const history = createBrowserHistory();

const configureStore = () => {
  let composeEnhancers = compose;

  const middlewares = [
    routerMiddleware(history),
    thunk,
    ...apiMiddleWare,
    ...postMiddleWare,
    ...serviceMiddleware,
    ...userMiddleware,
  ];

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(logger);
  }

  const persistedState = loadState();

  const store = createStore(
    rootReducer(history),
    persistedState || initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  const token = AuthService.setAuthorizationToken();
  if (token) {
    store.dispatch(setCurrentUser(jwtDecode(token)));
  }

  store.subscribe(
    throttle(() => {
      // saveState(store.getState());
    }, 1000),
  );

  return store;
};

export default configureStore;
