import config from '../config';
import { allowThrough } from '../middleware/jwtMiddleware';
import {
  sendMail,
} from '../controllers/serviceController';

const serviceRoutes = (app) => {
  app.route(`${config.apiRoutePrefix}/services/sendmail`)
    .post(allowThrough, sendMail);
};

export default serviceRoutes;
