import isEmpty from 'lodash/isEmpty';

export const roles = [
  'admin',
  'writer',
];

export const hasRole = (role, user) => {
  if (!isEmpty(user)) {
    const userRoles = user['https://hallux.io/roles'];
    if (userRoles) {
      return userRoles.includes(role);
    }
    return user.roles.includes(role);
  }
  return false;
};
