/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const postsReducer = handleActions(
  {
    ADD_POST: (posts, post) => posts.push(post),
    REMOVE_POST: (posts, id) => posts.splice(posts.findIndex(t => t.id === id), 1),
    COMPLETE_POST: (posts, id) => { posts[posts.findIndex(t => t.id === id)].complete = true; },
    UPDATE_POST: (posts, { id, data }) => posts[posts.findIndex(t => t.id === id)] = data,
  },
  initialState.posts,
);

export default postsReducer;
