import axios from 'axios';
import dotenv from 'dotenv';
import types from './loginActionTypes';
import notify from '../Toaster';

dotenv.config();

const login = (user, location) => {
  const loading = () => ({ type: types.LOGIN_LOADING });
  const success = () => ({
    type: types.LOGIN_SUCCESS,
    message: 'User successfully logged in'
  });
  const fail = error => ({ type: types.LOGIN_FAIL, error });

  return async dispatch => {
    try {
      dispatch(loading());
      console.log(`${process.env.API_URL}`);
      const res = await axios.post(`${process.env.API_URL}auth/signin`, user);
      const { token } = res.data?.data;
      if (token) {
        dispatch(success());
        notify('User successfully logged in');
        localStorage.setItem('token', token);
        location.assign('/');
      }
    } catch (err) {
      dispatch(fail(err.response?.data?.error ?? 'Network error'));
      notify(err.response?.data?.error ?? 'Network error');
    }
  };
};

export default login;
