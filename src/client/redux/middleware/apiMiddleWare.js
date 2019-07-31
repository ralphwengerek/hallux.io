import { normalize } from 'normalizr';
import { actions as toastrActions } from 'react-redux-toastr';
import { API_REQUEST } from '../actions/api';

const apiMiddleWare = ({ dispatch, getState }) => next => (action) => {
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
    if (!schema) {
      throw new Error('Specify a schema for normalizr');
    }
    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    return callAPI()
      .then((response) => {
        dispatch(onSuccess(normalize(response.data, schema)));
      }).catch((error) => {
        dispatch(onError(error));
        dispatch(toastrActions.add({
          type: 'error',
          title: 'Error',
          message: error.message,
        }));
        // dispatch global error api handling
      }).finally(() => onComplete && dispatch(onComplete()));
  }
  return next(action);
};

export default apiMiddleWare;
