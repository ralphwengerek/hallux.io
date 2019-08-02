export const API_REQUEST = '[app] - API Request';

export const apiRequest = (
  callAPI,
  schema,
  onSuccess,
  onError,
  onComplete,
) => ({
  type: API_REQUEST,
  meta: {
    callAPI,
    schema,
    onSuccess,
    onError,
    onComplete,
  },
});
