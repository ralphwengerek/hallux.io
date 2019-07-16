
import { CALL_API } from '../middleware/apiMiddleWare';
import { postApi } from '../../api';

export const fetchPosts = () => ({
  [CALL_API]: {
    types: ['LOAD_POST_REQUEST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'],
    shouldCallAPI: ({ post }) => post.items.length === 0,
    callAPI: () => postApi.fetchPosts(),
  },
});

export const fetchPost = id => ({
  [CALL_API]: {
    types: ['LOAD_POST_REQUEST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'],
    shouldCallAPI: ({ post }) => !post.items[id],
    callAPI: () => postApi.fetchPost(id),
  },
  payload: { id },
});
