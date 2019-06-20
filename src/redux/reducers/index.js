import { combineReducers } from 'redux';
import app from './app';
import todos from './todos';
import user from './user';

export default combineReducers({
  app,
  todos,
  user,
});
