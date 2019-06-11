import auth from '../../utils/Auth';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';

export const login = () => () => {
  auth.login();
  return {
    type: LOGIN,
    payload: null,
  };
};

export const logout = () => {
  auth.logout();
  return {
    type: LOGOUT,
    payload: null,
  };
};

export const loginSuccess = authResult => ({
  type: LOGIN_SUCCESS,
  payload: authResult,
});

export const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: err,
});

export const handleAuthentication = () => dispatch => auth.handleAuthentication()
  .then((authResult) => {
    dispatch(loginSuccess(authResult));
  })
  .catch((err) => {
    dispatch(loginFailure(err));
  });
