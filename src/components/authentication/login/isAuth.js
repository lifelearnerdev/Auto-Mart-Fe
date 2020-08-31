import jwt from 'jwt-decode';

const userAuth = () => {
  try {
    const { token } = localStorage;
    const user = jwt(token);
    return {
      user,
      isAuthenticated: true
    };
  } catch (error) {
    return {
      user: {},
      isAuthenticated: false
    };
  }
};

export default userAuth;
