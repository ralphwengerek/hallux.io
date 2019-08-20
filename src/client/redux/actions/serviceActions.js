export const SEND_MAIL = '[Service] Send mail';
export const SERVICE_API_INIT = '[Service] Api call init';
export const SERVICE_API_COMPLETE = '[Service] Api call complete';
export const SEND_MAIL_SUCCESS = '[Service] Send mail success';
export const SEND_MAIL_FAILURE = '[Service] Send mail failure';

// INITIALISE
export const serviceApiInit = () => ({
  type: SERVICE_API_INIT,
});

// COMPLETE
export const serviceApiComplete = () => ({
  type: SERVICE_API_COMPLETE,
});

// SEND EMAIL
export const sendMail = (mail) => ({
  type: SEND_MAIL,
  payload: mail,
});
export const sendMailSuccess = (data) => ({
  type: SEND_MAIL_SUCCESS,
  payload: data,
});
export const sendMailFailure = (error) => ({
  type: SEND_MAIL_FAILURE,
  payload: error,
});
