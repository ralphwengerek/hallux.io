import config from '../config';
import { checkJwt } from '../middleware/checkJwt';
import {
  createPost, findOne, findAll, updatePost, deletePost,
} from '../controllers/postController';

const postRoutes = (app) => {
  app.route(`${config.apiRoutePrefix}/posts`)
    .get(checkJwt, findAll)
    .post(checkJwt, createPost);

  app.route(`${config.apiRoutePrefix}/posts/:slug`)
    .get(checkJwt, findOne)
    .put(updatePost)
    .delete(deletePost);
};

export default postRoutes;
