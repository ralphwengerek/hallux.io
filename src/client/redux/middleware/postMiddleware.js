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

const getSinglePost = ({ dispatch, getState }) => next => (action) => {
  next(action);

  if (action.type === FETCH_POST) {
    const slug = action.payload;

    const { posts } = getState();
    const post = posts.postEntities[slug];

    if (!post || !post.content) {
      dispatch(fetchPostsInit());
      dispatch(apiRequest(
        () => fetchPost(slug),
        schema.POST,
        fetchPostSuccess,
        fetchPostFailure,
        fetchPostComplete,
      ));
    }
  }
};

const getPosts = ({ dispatch, getState }) => next => (action) => {
  next(action);

  if (action.type === FETCH_POSTS) {
    const { posts } = getState();
    if (!posts.postEntities.length) {
      dispatch(fetchPostsInit());
      dispatch(apiRequest(
        fetchPosts,
        schema.POST_ARRAY,
        fetchPostsSuccess,
        fetchPostsFailure,
        fetchPostsComplete,
      ));
    }
  }
};

export default [
  getSinglePost,
  getPosts,
];
