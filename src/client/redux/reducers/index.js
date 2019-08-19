import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import merge from 'lodash/merge';
import posts from './postReducer';
import user from './userReducer';
import ui from './uiReducer';

const entityState = {};

// Updates an entity cache in response to any action with response.entities.
const entities = (state = entityState, action) => {
  const { payload } = action;

  if (payload && payload.entities) {
    return merge({}, state, payload.entities);
  }

  return state;
};

export default (history) => combineReducers({
  router: connectRouter(history),
  entities,
  posts,
  ui,
  user,
});
