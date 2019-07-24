import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string()
    .required(),
  image: yup.string()
    .required(),
  summary: yup.string()
    .required(),
  content: yup.string()
    .required(),
  tags: yup.array().of(yup.string())
    .default([]),
  keywords: yup.array().of(yup.string())
    .default([]),
  slug: yup.string()
    .required(),
});

export default schema;
