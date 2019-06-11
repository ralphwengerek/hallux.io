/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const userReducer = handleActions(
  {
    LOGOUT: (user, payload) => {
      // TODO: clear user to initial
      user = user.isAuthenticated = false;
    },
    LOGIN: (user) => {
      user.loginAttempts += 1;
    },
    LOGIN_SUCCESS: (user, payload) => {
      user.accessToken = payload.accessToken;
      user.expiresIn = payload.expiresIn;
      user.email = payload.idTokenPayload.email;
      user.name = payload.idTokenPayload.name;
      user.picture = payload.idTokenPayload.picture;
      user.isAuthenticated = true;
    },
    LOGIN_FAILURE: (user, payload) => {
      console.log('LOGIN_FAILURE: ', user);
      console.log('Payload: ', payload);
    }

  },
  initialState.user,
);

export default userReducer;
