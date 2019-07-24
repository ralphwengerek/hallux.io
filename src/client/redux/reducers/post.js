/* eslint-disable */
import handleActions from '../handleActions';

import {
  POST_API_INIT,
  POST_API_COMPLETE,
  POST_API_FAILURE,
  FETCH_POSTS_SUCCESS,
  SAVE_POST_SUCCESS,
} from '../actions/post';

export const initialState = {
  postEntities: {},
  postIds: [],
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
    [SAVE_POST_SUCCESS]: (state, { postId, postEntity }) =>{
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
