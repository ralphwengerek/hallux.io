import { schema } from 'normalizr';

const postSchema = new schema.Entity('posts', {}, {
  idAttribute: post => post.slug,
});

export default {
  POST: postSchema,
  POST_ARRAY: [postSchema],
};
