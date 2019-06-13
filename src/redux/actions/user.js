import authService from '../../utils/AuthService';


const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';

export const login = () => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: null,
  });
  authService.login();
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
  authService.logout();
};

export const loginSuccess = authResult => ({
  type: LOGIN_SUCCESS,
  payload: authResult,
});

export const loginFailure = err => ({
  type: LOGIN_FAILURE,
  payload: err,
});

export const handleAuthentication = () => dispatch => authService
  .handleAuthentication()
  .then((authResult) => {
    dispatch(loginSuccess(authResult));
  })
  .catch((err) => {
    dispatch(loginFailure(err));
  });
