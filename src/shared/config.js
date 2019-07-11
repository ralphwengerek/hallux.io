const dotenv = require('dotenv');

const env = process.env.NODE_ENV;
const result = dotenv.config({
  path: `./.env.${env === 'production' ? 'production' : 'development'}`,
});

if (result.error) {
  throw result.error;
}

module.exports = {
  baseUrl: process.env.BASE_URL,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENTID,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.SERVER_PORT,
  mongoHost: process.env.MONGO_HOST,
  mongoDb: process.env.MONGO_DB,
  mongoUser: process.env.MONGO_USER,
  mongoPort: process.env.MONGO_PORT,
  isProduction: process.env.NODE_ENV === 'production',
};
