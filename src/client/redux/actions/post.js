
import { CALL_API } from '../middleware/apiMiddleWare';
import { postApi } from '../../api';
import schema from '../schemas/post';

export const fetchPosts = () => ({
  [CALL_API]: {
    types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
    shouldCallAPI: ({ post }) => post.items.length === 0,
    callAPI: () => postApi.fetchPosts(),
    schema: schema.POST_ARRAY,
  },
});

export const fetchPost = slug => ({
  [CALL_API]: {
    types: ['LOAD_POST_REQUEST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'],
    shouldCallAPI: ({ post }) => !post.items[slug],
    callAPI: () => postApi.fetchPost(slug),
    schema: schema.POST,
  },
  payload: { slug },
});
