export const FETCH_POST = '[post] - GET Single post';
export const FETCH_POST_SUCCESS = '[post] - GET Single post Success';
export const FETCH_POST_FAILURE = '[post] - GET Single post Failed';
export const FETCH_POST_COMPLETE = '[post] - GET Single post complete';

export const FETCH_POSTS = '[post] - GET ALL POSTS';
export const FETCH_POSTS_SUCCESS = '[post] - GET ALL POSTS Success';
export const FETCH_POSTS_FAILURE = '[post] - GET ALL POSTS Failed';
export const FETCH_POSTS_COMPLETE = '[post] - FETCH POSTS complete';

export const SELECT_POST = '[post] - Select post';
export const FETCH_POSTS_INIT = '[post] - Fetch post/s init';

export const fetchPostsInit = () => ({
  type: FETCH_POSTS_INIT,
});

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPost = slug => ({
  type: FETCH_POST,
  payload: slug,
});

export const fetchPostSuccess = ({ entities, result }) => ({
  type: FETCH_POST_SUCCESS,
  payload: {
    postId: result,
    postEntity: entities.posts[result],
  },
});


export const fetchPostsSuccess = ({ entities, result }) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    postIds: result,
    postEntities: entities.posts,
  },
});

export const fetchPostComplete = () => ({
  type: FETCH_POST_COMPLETE,
});

export const fetchPostsComplete = () => ({
  type: FETCH_POSTS_COMPLETE,
});

export const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const selectPost = slug => ({
  type: SELECT_POST,
  payload: slug,
});
