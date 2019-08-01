import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastrReducer } from 'react-redux-toastr';
import merge from 'lodash/merge';
import menu from './menu';
import posts from './post';
import user from './user';
import profilePanel from './profilePanel';
import ui from './ui';


const entityState = {};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = entityState, action) => {
  const { payload } = action;

  if (payload && payload.entities) {
    return merge({}, state, payload.entities);
  }

  return state;
};

export default history => combineReducers({
  router: connectRouter(history),
  entities,
  menu,
  profilePanel,
  posts,
  user,
  toastr: toastrReducer,
  ui,
});
