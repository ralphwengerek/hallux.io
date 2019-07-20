import {
  FETCH_POSTS, FETCH_POST,
  fetchPostsSuccess,
  fetchPostsComplete,
  fetchPostsFailure,
  fetchPostSuccess,
  fetchPostComplete,
  fetchPostFailure,
  fetchPostsInit,
} from '../actions/post';
import { apiRequest } from '../actions/api';
import { fetchPosts, fetchPost } from '../../api/postApi';
import schema from '../schemas/post';

const getSinglePost = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type === FETCH_POST) {
    const slug = action.payload;
    dispatch(fetchPostsInit());
    dispatch(apiRequest(
      () => fetchPost(slug),
      schema.POST,
      fetchPostSuccess,
      fetchPostFailure,
      fetchPostComplete,
    ));
  }
};


const getPosts = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type === FETCH_POSTS) {
    // if (getState().entities.posts.length === 0) {
    dispatch(fetchPostsInit());
    dispatch(apiRequest(
      fetchPosts,
      schema.POST_ARRAY,
      fetchPostsSuccess,
      fetchPostsFailure,
      fetchPostsComplete,
    ));
    // }
  }
};

export default [
  getSinglePost,
  getPosts,
];
