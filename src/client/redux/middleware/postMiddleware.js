/* eslint-disable no-underscore-dangle */
import { push } from 'connected-react-router';
import { message } from 'antd';
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
  SAVE_POST_SUCCESS,
} from '../actions/postActions';
import { apiRequest } from '../actions/apiActions';
import {
  fetchPosts, fetchPost, createPost, updatePost,
} from '../../api/postApi';
import schema from '../schemas/post';

const getSinglePost = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_POST) {
    const slug = action.payload;

    const { posts } = getState();
    const post = posts.entities[slug];

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

const savePost = ({ dispatch }) => (next) => (action) => {
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

const onSavePostSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === SAVE_POST_SUCCESS) {
    const { id } = action.payload;
    dispatch(push(`/blog/${id}`));
    message.info('Post saved');
  }
};

const getPosts = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (action.type === FETCH_POSTS) {
    const { posts } = getState();

    if (!posts.ids.length) {
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
  onSavePostSuccess,
];
