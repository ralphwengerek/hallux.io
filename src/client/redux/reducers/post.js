/* eslint-disable */
import handleActions from '../handleActions';

import {
  FETCH_POSTS_INIT,
  FETCH_POSTS_COMPLETE,
  FETCH_POST_COMPLETE,
  FETCH_POSTS_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
} from '../actions/post';

export const initialState = {
  postEntities: {},
  postIds: [],
  requests: 0,
  error: undefined,
};

const postReducer = handleActions(
  {
    [FETCH_POSTS_INIT]: (state) => {
      state.requests += 1;
    },
    [FETCH_POSTS_COMPLETE]: (state) => {
      state.requests -= 1;
    },
    [FETCH_POST_COMPLETE]: (state) => {
      state.requests -= 1;
    },
    [FETCH_POSTS_FAILURE]: (state, { message }) => {
      state.error = message;
    },
    [FETCH_POST_SUCCESS]: (state, { postId, postEntity }) =>{
      state.activePost=postId;
      state.postEntities[postId] = postEntity;
      state.error = undefined;
    },
    [FETCH_POSTS_SUCCESS]: (state, { postEntities, postIds }) => {
      state.postEntities = postEntities;
      state.postIds = postIds;
      state.error = undefined;
    },
  },
  initialState,
);

export const getAllPosts = ({ posts }) => ({
  ...posts,
  isLoading: posts.requests > 0
});

export const getPostBySlug = ({ posts }, slug ) => posts.postEntities[slug];

export default postReducer;
