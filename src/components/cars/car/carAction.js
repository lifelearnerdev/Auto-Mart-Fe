import axios from 'axios';
import types from './carActionTypes';
import notify from '../../shared/Toaster';


const fetchCar = (id) => {
  const loading = () => ({ type: types.FETCH_CAR_LOADING });
  const success = (car) => ({
    type: types.FETCH_CAR_SUCCESS,
    car
  });
  const fail = error => ({ type: types.FETCH_CAR_FAIL, error });

  return async dispatch => {
    try {
      const token = localStorage.getItem('token');
      dispatch(loading());
      const res = await axios.get(`${process.env.API_URL}car/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      });
      const car = res.data?.data;
      if (res) {
        dispatch(success(car));
      }
    } catch (err) {
      dispatch(fail(err.response?.data?.error ?? 'Network error'));
      notify(err.response?.data?.error ?? 'Network error');
    }
  };
};

export default fetchCar;
