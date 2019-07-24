/* eslint-disable no-underscore-dangle */
import {
  postApiInit,
  postApiComplete,
  FETCH_POSTS,
  fetchPostsSuccess,
  fetchPostsFailure,
  FETCH_POST,
  fetchPostSuccess,
  fetchPostFailure,
  SAVE_POST,
  savePostSuccess,
  savePostFailure,
} from '../actions/post';
import { apiRequest } from '../actions/api';
import {
  fetchPosts, fetchPost, createPost, updatePost,
} from '../../api/postApi';
import schema from '../schemas/post';

const getSinglePost = ({ dispatch, getState }) => next => (action) => {
  next(action);

  if (action.type === FETCH_POST) {
    const slug = action.payload;

    const { posts } = getState();
    const post = posts.postEntities[slug];

    if (!post || !post.content) {
      dispatch(postApiInit());
      dispatch(apiRequest(
        () => fetchPost(slug),
        schema.POST,
        fetchPostSuccess,
        fetchPostFailure,
        postApiComplete,
      ));
    }
  }
};

const savePost = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type === SAVE_POST) {
    const post = action.payload;
    dispatch(postApiInit());
    dispatch(apiRequest(
      () => (post._id ? updatePost(post) : createPost(post)),
      schema.POST,
      savePostSuccess,
      savePostFailure,
      postApiComplete,
    ));
  }
};

const getPosts = ({ dispatch, getState }) => next => (action) => {
  next(action);

  if (action.type === FETCH_POSTS) {
    const { posts } = getState();
    if (!posts.postEntities.length) {
      dispatch(postApiInit());
      dispatch(apiRequest(
        fetchPosts,
        schema.POST_ARRAY,
        fetchPostsSuccess,
        fetchPostsFailure,
        postApiComplete,
      ));
    }
  }
};

export default [
  getSinglePost,
  getPosts,
  savePost,
];
