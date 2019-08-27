import isEmpty from 'lodash/isEmpty';

export const roles = {
  ADMIN: 'admin',
  WRITER: 'writer',
};

export const hasRole = (role, user) => {
  if (!isEmpty(user)) {
    return user.roles.includes(role);
  }
  return false;
};
