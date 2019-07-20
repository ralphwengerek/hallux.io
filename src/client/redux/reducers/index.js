import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import menu from './menu';
import posts from './post';
import user from './user';
import profilePanel from './profilePanel';


const entityState = {};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = entityState, action) => {
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
  posts,
  user,
});
