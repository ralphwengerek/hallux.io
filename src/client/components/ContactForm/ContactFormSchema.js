import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string()
    .required(),
  company: yup.string()
    .required(),
  email: yup.string()
    .email()
    .required(),
  message: yup.string()
    .required(),
});

export default schema;
