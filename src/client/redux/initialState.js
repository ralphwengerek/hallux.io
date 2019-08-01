import { initialState as menu } from './reducers/menu';
import { initialState as post } from './reducers/post';
import { initialState as profilePanel } from './reducers/profilePanel';
import { initialState as user } from './reducers/user';
import { initialState as ui } from './reducers/ui';

const initialState = {
  menu,
  posts: post,
  profilePanel,
  user,
  ui,
};

export default initialState;
