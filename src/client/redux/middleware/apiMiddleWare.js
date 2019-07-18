import { normalize } from 'normalizr';
// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'CALL_API';

const apiMiddleWare = ({ dispatch, getState }) => next => (action) => {
  const api = action[CALL_API];
  if (typeof api === 'undefined') {
    return next(action);
  }

  const {
    types,
    shouldCallAPI = () => true,
    callAPI,
    schema,
  } = api;

  if (
    !Array.isArray(types)
      || types.length !== 3
      || !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
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

  const [requestType, successType, failureType] = types;
  const { payload } = action;

  dispatch(
    Object.assign({}, {
      payload,
      type: requestType,
    }),
  );

  return callAPI().then(
    response => dispatch(
      Object.assign({}, {
        payload: normalize(response.data, schema),
        type: successType,
      }),
    ),
    error => dispatch(
      Object.assign({}, {
        payload: error,
        type: failureType,
      }),
    ),
  );
};

export default apiMiddleWare;
