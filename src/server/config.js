import { config } from 'dotenv';

const env = process.env.NODE_ENV;
const result = config({
  path: `./.env.${env === 'production' ? 'production' : 'development'}`,
});

if (result.error) {
  throw result.error;
}

const configuration = {
  baseUrl: process.env.BASE_URL,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENTID,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.PORT,
  mongoHost: process.env.MONGO_HOST,
  mongoDb: process.env.MONGO_DB,
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
  mongoPort: process.env.MONGO_PORT,
  isProduction: process.env.NODE_ENV === 'production',
  apiRoutePrefix: process.env.API_ROUTE_PREFIX,
};

export const apiUrl = `https://${configuration.serverHost}${configuration.apiRoutePrefix}`;

export default configuration;
