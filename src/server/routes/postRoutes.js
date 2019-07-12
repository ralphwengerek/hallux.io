import config from '../../shared/config';
import {
  createPost, findOne, findAll, updatePost, deletePost,
} from '../controllers/postController';

const postRoutes = (app) => {
  app.route(`${config.apiRoutePrefix}/posts`)
    .get(findAll)
    .post(createPost);

  app.route(`${config.apiRoutePrefix}/posts/:id`)
    .get(findOne)
    .put(updatePost)
    .delete(deletePost);
};

export default postRoutes;
