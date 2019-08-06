/* eslint-disable no-underscore-dangle */
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import { actions as toastrActions } from 'react-redux-toastr';
import {
  LOGIN_SUCCESS, setCurrentUser,
} from '../actions/userActions';

const onLoginSuccess = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type === LOGIN_SUCCESS) {
    const { payload } = action;
    const user = jwtDecode(payload.idToken);

    dispatch(setCurrentUser(user));

    dispatch(push('/'));

    dispatch(toastrActions.add({
      type: 'success',
      title: 'Welcome back',
      attention: true, // This will add a shadow like the confirm method.
      message: `${user.given_name} 👍`,
    }));
  }
};

export default [onLoginSuccess];
