import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import config from '../config';

export const allowThrough = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.auth0Domain}/.well-known/jwks.json`,
  }),
  // Validate the audience and the issuer.
  credentialsRequired: false,
  audience: config.auth0ClientId,
  issuer: `https://${config.auth0Domain}/`,
  algorithms: ['RS256'],
});

export const protect = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.auth0Domain}/.well-known/jwks.json`,
  }),
  // Validate the audience and the issuer.
  audience: config.auth0ClientId,
  issuer: `https://${config.auth0Domain}/`,
  algorithms: ['RS256'],
});

export default {
  allowThrough,
  protect,
};
