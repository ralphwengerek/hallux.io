/* eslint-disable */
import handleActions from '../handleActions';
import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import {
  POST_API_INIT,
  POST_API_COMPLETE,
  POST_API_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  SAVE_POST_SUCCESS,
} from '../actions/postActions';

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

const tagsReducer = handleActions({
  [FETCH_POSTS_SUCCESS] : (state, { entities, ids }) => {
    let tags = [];
    entities.forEach(post => {
      tags = tags.concat(post.tags);
    });

    const distinct = Array.from(new Set(tags.map(t=>t))).map(tag => {
      let count = 0;
      tags.forEach(t=> t === tag && count++);
      return {
        value: tag,
        count
      };
    });

    state = distinct;
  },
}, [],
);


// SELECTORS ///////////////////////////

export const getAllPosts = (state) =>{
  const { posts } = state;
  return  ({
    entities: posts.ids.map(slug => posts.entities[slug]),
    isLoading: posts.requests > 0,
    error: posts.error,
  });
};

export const getPostsByTag = (state, tag) => {
  const allPosts = getAllPosts(state);

  if (tag === undefined) {
    return allPosts;
  }

  const filteredPosts = allPosts.entities.filter(p=> p.tags.some(t=> t.toLowerCase() === tag));

  return  ({
    ...allPosts,
    entities: filteredPosts,
  });
};

export const getPostBySlug = ({ posts }, slug ) => ({
  entity: posts.entities[slug],
  isLoading: posts.requests > 0,
});

export const getDistinctTags = (state) => {
  let tags = [];
  getAllPosts(state).entities.forEach(post => {
    tags = tags.concat(post.tags);
  });

  return Array.from(new Set(tags.map(t=>t))).map(tag => {
    let count = 0;
    tags.forEach(t=> t === tag && count++);
    return {
      value: tag,
      count
    };
  });
};

export default postReducer;
