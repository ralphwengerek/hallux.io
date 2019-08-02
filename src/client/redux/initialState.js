import { initialState as post } from './reducers/postReducer';
import { initialState as user } from './reducers/userReducer';
import { initialState as ui } from './reducers/uiReducer';

const initialState = {
  posts: post,
  user,
  ui,
};

export default initialState;
