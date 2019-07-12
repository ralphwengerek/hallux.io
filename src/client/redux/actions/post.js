const CREATE_POST = 'CREATE_POST';
const GET_POST = 'GET_POST';
const GET_POSTS = 'GET_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const createPost = post => ({
  type: CREATE_POST,
  payload: post,
});

export const getPost = id => ({
  type: GET_POST,
  payload: id,
});

export const getPosts = () => ({
  type: GET_POSTS,
  payload: null,
});

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: post,
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: id,
});
