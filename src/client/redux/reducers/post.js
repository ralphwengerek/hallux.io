/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const postsReducer = handleActions(
  {
    LOAD_POST_REQUEST: (state) => state.isLoading = true,
    LOAD_POST_SUCCESS: (state, { data }) => {
      state.items = data;
      state.isLoading = false;
      state.error = undefined;
    },
    LOAD_POST_FAILURE: (state, { message }) => {
      state.isLoading = false;
      state.error = message;
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
