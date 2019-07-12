import {
  createTag, findOne, findAll, updateTag, deleteTag,
} from '../controllers/tagController';

const tagRoutes = (app) => {
  app.route('/tags')
    .get(findAll)
    .post(createTag);

  app.route('/tags/:id')
    .get(findOne)
    .put(updateTag)
    .delete(deleteTag);
};

export default tagRoutes;
