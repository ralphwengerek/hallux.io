import postRoutes from './postRoutes';
import tagRoutes from './tagRoutes';

const routes = {
  postRoutes,
  tagRoutes,
};

export default (app) => {
  Object.keys(routes).map(r => routes[r](app));
};
