import api from './api';

export const newUser = user =>
  api.post('/auth/register', user);

export const auth = data =>
  api.post('auth/authenticate', data);