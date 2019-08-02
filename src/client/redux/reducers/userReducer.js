/* eslint-disable */
import handleActions from '../handleActions';
import merge from 'lodash/merge';
import {
  LOGOUT,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/userActions';

export const initialState = {
  accessToken: undefined,
  expiresIn: undefined,
  email: undefined,
  name: undefined,
  picture: undefined,
  isAuthenticated: false,
  loginAttempts: 0,
};

const userReducer = handleActions(
  {
    [LOGOUT]: (user) => {
      merge(user, initialState.user);
    },
    [LOGIN]: (user) => {
      user.loginAttempts += 1;
    },
    [LOGIN_SUCCESS]: (user, authResponse) => {
      user.accessToken = authResponse.accessToken;
      user.expiresIn = authResponse.expiresIn;
      user.email = authResponse.idTokenPayload.email;
      user.name = authResponse.idTokenPayload.name;
      user.picture = authResponse.idTokenPayload.picture;
      user.isAuthenticated = true;
    },
    [LOGIN_FAILURE]: (user, payload) => {
      console.log('LOGIN_FAILURE: ', payload);
    },
  },
  initialState,
);

export default userReducer;

// Selectors

export const getUserIsAuthenticated = ({ user }) => user.isAuthenticated;

export const getUserPicture = ({ user }) => user.picture;

export const getUser = ({ user }) => user;
