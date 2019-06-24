import { combineReducers } from 'redux';
import menu from './menu';
import todos from './todos';
import user from './user';
import profilePanel from './profilePanel';

export default combineReducers({
  menu,
  profilePanel,
  todos,
  user,
});
