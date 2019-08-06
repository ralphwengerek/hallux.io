import config from '../config';
import { protect, allowThrough } from '../middleware/jwtMiddleware';
import {
  createPost, findOne, findAll, updatePost, deletePost,
} from '../controllers/postController';

const postRoutes = (app) => {
  app.route(`${config.apiRoutePrefix}/posts`)
    .get(allowThrough, findAll)
    .post(protect, createPost);

  app.route(`${config.apiRoutePrefix}/posts/:slug`)
    .get(allowThrough, findOne)
    .put(protect, updatePost)
    .delete(protect, deletePost);
};

export default postRoutes;
