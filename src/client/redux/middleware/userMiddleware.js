/* eslint-disable no-underscore-dangle */
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import { message } from 'antd';
import {
  LOGIN_SUCCESS, setCurrentUser,
} from '../actions/userActions';

const onLoginSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === LOGIN_SUCCESS) {
    const { payload } = action;
    const user = jwtDecode(payload.idToken);

    dispatch(setCurrentUser(user));

    dispatch(push('/'));

    message.success(`Welcome back ${user.given_name} 👍`);
  }
};

export default [onLoginSuccess];
