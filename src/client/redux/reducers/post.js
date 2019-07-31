/* eslint-disable */
import handleActions from '../handleActions';
import merge from 'lodash/merge';

import {
  POST_API_INIT,
  POST_API_COMPLETE,
  POST_API_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  SAVE_POST_SUCCESS,
} from '../actions/post';

export const initialState = {
  entities: {},
  ids: [],
  requests: 0,
  error: undefined,
};

const postReducer = handleActions(
  {
    [POST_API_INIT]: (state) => {
      state.requests += 1;
    },
    [POST_API_COMPLETE]: (state) => {
      state.requests -= 1;
    },
    [POST_API_FAILURE]: (state, { message }) => {
      state.error = message;
    },
    [SAVE_POST_SUCCESS]: (state, { id, entity }) =>{
      state.active=id;
      state.entities[id] = entity;
      state.error = undefined;
    },
    [FETCH_POST_SUCCESS]: (state, { entity, id }) => {
      state.active=id;
      state.entities[id] = entity;
      state.error = undefined;
    },
    [FETCH_POSTS_SUCCESS]: (state, { entities, ids }) => {
      state.entities = merge({}, state.entities, entities);
      state.ids = ids;
      state.error = undefined;
    },
  },
  initialState,
);

export const getAllPosts = (state) => ({
  ...state.posts,
  isLoading: state.posts.requests > 0
});

export const getPostsByTag = (state, tag) => {
const allPosts = getAllPosts(state);
debugger;
if (allPosts.entities.length) {

const filteredPosts = getAllPosts(state)
                        .entities
                        .filter(p=> p.tags.some(t=> t.toLowerCase() === tag));

 return  ({
  entities: filteredPosts,
  isLoading: posts.requests > 0
});
}
};

export const getPostBySlug = ({ posts }, slug ) => ({
  entity: posts.entities[slug],
  isLoading: posts.requests > 0,
});

export default postReducer;
