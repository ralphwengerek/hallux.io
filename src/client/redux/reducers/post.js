/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const postsReducer = handleActions(
  {
    LOAD_POST_REQUEST: (state) => state.isLoading = true,
    LOAD_POST_FAILURE: (state, { message }) => {
      state.isLoading = false;
      state.error = message;
    },
    LOAD_POST_SUCCESS: (state, post) =>{
      debugger;
      state.items[data.slug] = data;
      state.isLoading = false;
      state.error = undefined;
    },
    LOAD_POSTS_SUCCESS: (state, posts) => {
      debugger;
      state.items = data;
      state.isLoading = false;
      state.error = undefined;
    },
    CREATE_POST: (state, post) => state.items.push(post),
    DELETE_POST: (state, id) => state.items.splice(items.findIndex(t => t.id === id), 1),
    COMPLETE_POST: (state, id) => { state.items[state.items.findIndex(t => t.id === id)].complete = true; },
    UPDATE_POST: (state, { id, data }) => state.items[state.items.findIndex(t => t.id === id)] = data,
  },
  initialState.post,
);

export const getAllPosts = ({ post }) => post;

export default postsReducer;
