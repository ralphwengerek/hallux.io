/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { apiUrl } from '../config';

const sendMail = (email) => axios.post(`${apiUrl}/services/sendmail`, email);

export {
  sendMail,
};
