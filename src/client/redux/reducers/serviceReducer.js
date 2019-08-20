/* eslint-disable */
import handleActions from '../handleActions';

import {
  SERVICE_API_INIT,
  SERVICE_API_COMPLETE,
  SERVICE_API_FAILURE,
} from '../actions/postActions';

export const initialState = {
  requests: 0,
  error: undefined,
};

const serviceReducer = handleActions(
  {
    [SERVICE_API_INIT]: (state) => {
      state.requests += 1;
    },
    [SERVICE_API_COMPLETE]: (state) => {
      state.requests -= 1;
    },
    [SERVICE_API_FAILURE]: (state, { message }) => {
      state.error = message;
    },
  },
  initialState,
);

// SELECTORS ///////////////////////////

export const getIsLoading = (state) =>{
  return state.requests !== 0;
};

export default serviceReducer;
