import { combineReducers } from 'redux';
import menu from './menu';
import post from './post';
import user from './user';
import profilePanel from './profilePanel';

export default combineReducers({
  menu,
  profilePanel,
  post,
  user,
});
