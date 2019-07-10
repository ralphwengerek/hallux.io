/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';
import merge from 'lodash/merge';

const userReducer = handleActions(
  {
    LOGOUT: (user) => {
      merge(user, initialState.user);
    },
    LOGIN: (user) => {
      user.loginAttempts += 1;
    },
    LOGIN_SUCCESS: (user, authResponse) => {
      user.accessToken = authResponse.accessToken;
      user.expiresIn = authResponse.expiresIn;
      user.email = authResponse.idTokenPayload.email;
      user.name = authResponse.idTokenPayload.name;
      user.picture = authResponse.idTokenPayload.picture;
      user.isAuthenticated = true;
    },
    LOGIN_FAILURE: (user, payload) => {
      console.log('LOGIN_FAILURE: ', payload);
    },
  },
  initialState.user,
);

export default userReducer;

// Selectors

export const getUserIsAuthenticated = ({ user }) => user.isAuthenticated;

export const getUserPicture = ({ user }) => user.picture;

export const getUser = ({ user }) => user;
