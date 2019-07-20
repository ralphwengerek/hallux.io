import config from '../config';
import {
  createPost, findOne, findAll, updatePost, deletePost,
} from '../controllers/postController';

const postRoutes = (app) => {
  app.route(`${config.apiRoutePrefix}/posts`)
    .get(findAll)
    .post(createPost);

  app.route(`${config.apiRoutePrefix}/posts/:slug`)
    .get(findOne)
    .put(updatePost)
    .delete(deletePost);
};

export default postRoutes;
