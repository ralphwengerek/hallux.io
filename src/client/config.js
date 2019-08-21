export const configuration = {
  baseUrl: process.env.BASE_URL,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENTID,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.PORT,
  isProduction: process.env.NODE_ENV === 'production',
  apiRoutePrefix: process.env.API_ROUTE_PREFIX,
};

export const apiUrl = configuration.isProduction
  ? `http://${configuration.baseUrl}${configuration.apiRoutePrefix}`
  : `http://${configuration.serverHost}:${configuration.serverPort}${configuration.apiRoutePrefix}`;

export default configuration;
