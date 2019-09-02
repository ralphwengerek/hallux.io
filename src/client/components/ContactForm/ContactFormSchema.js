import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string()
    .required('Name is a required field'),
  company: yup.string()
    .required('Company is a required field'),
  email: yup.string()
    .email('Please enter a valid email address')
    .required('Email is a required field'),
  message: yup.string()
    .required('Message is a required field'),
});

export default schema;
