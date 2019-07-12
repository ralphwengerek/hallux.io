import {
  createPost, findOne, findAll, updatePost, deletePost,
} from '../controllers/postController';

const postRoutes = (app) => {
  app.route('/posts')
    .get(findAll)
    .post(createPost);

  app.route('/posts/:id')
    .get(findOne)
    .put(updatePost)
    .delete(deletePost);
};

export default postRoutes;
