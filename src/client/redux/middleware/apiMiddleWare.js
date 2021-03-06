import { normalize } from 'normalizr';
import { message } from 'antd';
import { API_REQUEST } from '../actions/apiActions';

const apiMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === API_REQUEST) {
    const { meta } = action;

    const {
      callAPI,
      shouldCallAPI = () => true,
      schema,
      onSuccess,
      onError,
      onComplete,
    } = meta;

    if (!onSuccess || !onError) {
      throw new Error('Expected onSuccess and onFailure action types');
    }
    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    return callAPI()
      .then((response) => {
        dispatch(onSuccess(schema ? normalize(response.data, schema) : response.data));
      }).catch((error) => {
        // if ([401, 403].indexOf(response.status) !== -1) {
        //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        //   dispatch(logout);
        //   location.reload(true);
        // }
        dispatch(onError(error));
        message.error(error.message);
        // dispatch global error api handling
      }).finally(() => onComplete && dispatch(onComplete()));
  }
  return next(action);
};

export default [apiMiddleWare];
