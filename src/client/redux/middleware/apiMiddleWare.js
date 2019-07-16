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
  } = api;

  if (
    !Array.isArray(types)
      || types.length !== 3
      || !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
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
        payload: response,
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
