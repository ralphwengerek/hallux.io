export const FETCH_POST = '[post] - GET Single post';
export const FETCH_POST_SUCCESS = '[post] - Get Single post Success';
export const FETCH_POST_FAILURE = '[post] - Get Single post Failed';
export const FETCH_POST_COMPLETE = '[post] - Get Single post complete';

export const FETCH_POSTS = '[post] - Get all posts';
export const FETCH_POSTS_SUCCESS = '[post] - Get all posts Success';
export const FETCH_POSTS_FAILURE = '[post] - GET all posts Failed';
export const FETCH_POSTS_COMPLETE = '[post] - Get posts complete';

export const SAVE_POST = '[post] - Save post';
export const SAVE_POST_SUCCESS = '[post] - Save post Success';
export const SAVE_POST_FAILURE = '[post] - Save post Failed';
export const SAVE_POST_COMPLETE = '[post] - Save post complete';

export const POST_API_INIT = '[post] - Api post/s init';
export const POST_API_COMPLETE = '[post] - Api post/s complete';

// INITIALISE
export const postApiInit = () => ({
  type: POST_API_INIT,
});

// COMPLETE
export const postApiComplete = () => ({
  type: POST_API_COMPLETE,
});

// fetch Post
export const fetchPost = slug => ({
  type: FETCH_POST,
  payload: slug,
});
export const fetchPostSuccess = ({ entities, result }) => ({
  type: FETCH_POST_SUCCESS,
  payload: {
    id: result,
    entity: entities.posts[result],
  },
});
export const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

// fetch all posts
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});
export const fetchPostsSuccess = ({ entities, result }) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    ids: result,
    entities: entities.posts,
  },
});
export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

// update/save post
export const savePost = post => ({
  type: SAVE_POST,
  payload: post,
});
export const savePostSuccess = ({ entities, result }) => ({
  type: SAVE_POST_SUCCESS,
  payload: {
    id: result,
    entity: entities.posts[result],
  },
});
export const savePostFailure = error => ({
  type: SAVE_POST_FAILURE,
  payload: error,
});
