import { config } from 'dotenv';

const env = process.env.NODE_ENV;
const result = config({
  path: `./.env.${env}`,
});

if (result.error) {
  throw result.error;
}

const configuration = {
  baseUrl: process.env.BASE_URL,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENTID,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI,
  mongoHost: process.env.MONGO_HOST,
  mongoDb: process.env.MONGO_DB,
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD,
  mongoPort: process.env.MONGO_PORT,
  sendGridApiKey: process.env.SENDGRID_API_KEY,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.PORT,
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NODE_ENV === 'staging',
  apiRoutePrefix: process.env.API_ROUTE_PREFIX,
};

export default configuration;
