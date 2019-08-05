/* eslint-disable no-underscore-dangle */
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import {
  LOGIN_SUCCESS,
} from '../actions/userActions';

const onLoginSuccess = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type === LOGIN_SUCCESS) {
    const { payload } = action;
    dispatch(push('/'));

    dispatch(toastrActions.add({
      type: 'success',
      title: 'Welcome back',
      attention: true, // This will add a shadow like the confirm method.
      message: `${payload.idTokenPayload.given_name} 👍`,
    }));
  }
};

export default [onLoginSuccess];
