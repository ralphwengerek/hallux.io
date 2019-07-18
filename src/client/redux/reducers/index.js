import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import menu from './menu';
import post from './post';
import user from './user';
import profilePanel from './profilePanel';
import initialState from '../initialState';

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { ...initialState }, action) => {
  const { payload } = action;
  if (payload && payload.entities) {
    return merge({}, state, payload.entities);
  }

  return state;
};

export default combineReducers({
  entities,
  menu,
  profilePanel,
  post,
  user,
});
