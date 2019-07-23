import postRoutes from './postRoutes';

const routes = {
  postRoutes,
};

export default (app) => {
  Object.keys(routes).map(r => routes[r](app));
};
