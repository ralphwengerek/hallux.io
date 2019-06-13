import auth0 from 'auth0-js';

class AuthService {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
      responseType: 'token id_token',
      scope: 'openid profile email',
      // audience: 'https://' + YOUR_DOMAIN + '/userinfo',
    });
  }

  login = () => {
    this.auth0.authorize();
  }

  handleAuthentication = () => new Promise(
    (resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve(authResult);
        } else if (err) {
          reject(authResult);
        }
      });
    },
  )

  setSession = (authResult) => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  isAuthenticated = () => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.auth0.logout({
      clientID: process.env.AUTH0_CLIENTID,
      returnTo: process.env.BASE_URL,
    });
  }

  getAccessToken = () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile = (callback) => {
    this.auth0.client.userProfile(
      this.getAccessToken(),
      (err, profile) => {
        callback(profile, err);
      },
    );
  }
}

const authService = new AuthService();

export default authService;
