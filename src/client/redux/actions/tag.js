const CREATE_TAG = 'CREATE_TAG';
const GET_TAG = 'GET_TAG';
const GET_TAGS = 'GET_TAG';
const UPDATE_TAG = 'UPDATE_TAG';
const DELETE_TAG = 'DELETE_TAG';

export const createTag = tag => ({
  type: CREATE_TAG,
  payload: tag,
});

export const getTag = id => ({
  type: GET_TAG,
  payload: id,
});

export const getTags = () => ({
  type: GET_TAGS,
  payload: null,
});

export const updateTag = tag => ({
  type: UPDATE_TAG,
  payload: tag,
});

export const deleteTag = id => ({
  type: DELETE_TAG,
  payload: id,
});
