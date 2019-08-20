import postRoutes from './postRoutes';
import serviceRoutes from './serviceRoutes';

const routes = {
  serviceRoutes,
  postRoutes,
};

export default (app) => {
  Object.keys(routes).map((r) => routes[r](app));
};
