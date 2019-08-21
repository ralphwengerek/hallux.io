export const configuration = {
  apiUrl: process.env.API_URL,
  baseUrl: process.env.BASE_URL,
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENTID,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.PORT,
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NODE_ENV === 'staging',
  isDevelopment: process.env.NODE_ENV === 'development',
  apiRoutePrefix: process.env.API_ROUTE_PREFIX,
};

export const apiUrl = configuration.isDevelopment
  ? `${configuration.apiUrl}${configuration.apiRoutePrefix}`
  : `${configuration.baseUrl}${configuration.apiRoutePrefix}`;

export default configuration;
