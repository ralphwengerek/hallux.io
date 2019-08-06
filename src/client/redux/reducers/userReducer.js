/* eslint-disable */
import handleActions from '../handleActions';
import merge from 'lodash/merge';
import isEmpty from 'lodash/isEmpty';

import {
  LOGOUT,
  LOGIN,
  LOGIN_FAILURE,
  SET_CURRENT_USER,
} from '../actions/userActions';

export const initialState = {
  user: {},
  isAuthenticated: false,
  loginAttempts: 0,
};

const userReducer = handleActions(
  {
    [LOGOUT]: (state) => {
      state = initialState;
    },
    [LOGIN]: (state) => {
      state.loginAttempts += 1;
    },
    [LOGIN_FAILURE]: (state, payload) => {
      console.log('LOGIN_FAILURE: ', payload);
    },
    [SET_CURRENT_USER]: (state, user) => {
      user.roles = user['https://hallux.io/roles'];
      delete user['https://hallux.io/roles'];
      merge(state.user, user);
      state.isAuthenticated = !isEmpty(user);
    }
  },
  initialState,
);

export default userReducer;

// Selectors

export const getUserIsAuthenticated = ({ user }) => user.isAuthenticated;

export const getUserPicture = ({ user }) => user.user.picture;

export const getUser = ({ user }) => user.user;
