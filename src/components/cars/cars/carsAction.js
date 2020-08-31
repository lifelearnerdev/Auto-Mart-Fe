import axios from 'axios';
import types from './carsActionTypes';
import notify from '../../shared/Toaster';


const fetchCars = () => {
  const loading = () => ({ type: types.FETCH_CARS_LOADING });
  const success = (cars) => ({
    type: types.FETCH_CARS_SUCCESS,
    cars
  });
  const fail = error => ({ type: types.FETCH_CARS_FAIL, error });

  return async dispatch => {
    try {
      const token = localStorage.getItem('token');

      dispatch(loading());
      const res = await axios.get(`${process.env.API_URL}car?status=available`, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      });
      const cars = res.data?.data;
      if (res) {
        dispatch(success(cars));
      }
    } catch (err) {
      dispatch(fail(err.response?.data?.error ?? 'Network error'));
      notify(err.response?.data?.error ?? 'Network error');
    }
  };
};

export default fetchCars;
