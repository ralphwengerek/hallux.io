import config from '../config';
import {
  createTag, findOne, findAll, updateTag, deleteTag,
} from '../controllers/tagController';

const tagRoutes = (app) => {
  app.route(`${config.apiRoutePrefix}/tags`)
    .get(findAll)
    .post(createTag);

  app.route(`${config.apiRoutePrefix}/tags/:id`)
    .get(findOne)
    .put(updateTag)
    .delete(deleteTag);
};

export default tagRoutes;
