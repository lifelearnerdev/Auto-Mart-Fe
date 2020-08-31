import jwt from 'jwt-decode';

const checkToken = () => next => action => {
  if (process.env.NODE_ENV === 'test') {
    return next(action);
  }
  try {
    const decoded = jwt(localStorage.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      window.location.assign('/login');
      localStorage.token = '';
    }
  } catch (error) {
    if (localStorage.token) {
      window.location.assign('/login');
    }
    localStorage.token = '';
  }
  return next(action);
};

export default checkToken;
