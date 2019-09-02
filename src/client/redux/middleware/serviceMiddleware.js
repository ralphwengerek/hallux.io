/* eslint-disable no-underscore-dangle */
import { push } from 'connected-react-router';
import { message } from 'antd';
import { serviceApi } from '../../api';
import { apiRequest } from '../actions/apiActions';
import {
  serviceApiInit,
  serviceApiComplete,
  SEND_MAIL,
  sendMailSuccess,
  SEND_MAIL_SUCCESS,
  sendMailFailure,
  SEND_MAIL_FAILURE,
} from '../actions/serviceActions';


const submitContactForm = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === SEND_MAIL) {
    const mail = action.payload;
    dispatch(serviceApiInit());
    dispatch(apiRequest(
      () => serviceApi.sendMail(mail),
      undefined,
      sendMailSuccess,
      sendMailFailure,
      serviceApiComplete,
    ));
  }
};

const submitContactFormSuccess = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === SEND_MAIL_SUCCESS) {
    dispatch(push('/'));
    message.success('Thank you. Your message has been sent! 👍');
  }
};

const submitContactFormFail = () => (next) => (action) => {
  next(action);

  if (action.type === SEND_MAIL_FAILURE) {
    message.error('Oops! Your message has not been sent! Please try again 👍');
  }
};

export default [
  submitContactForm,
  submitContactFormSuccess,
  submitContactFormFail,
];
