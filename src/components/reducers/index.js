import { combineReducers } from 'redux';
import signup from '../authentication/signup/signupReducer';
import login from '../authentication/login/loginReducer';
import cars from '../cars/cars/carsReducer';
import car from '../cars/car/carReducer';

export default combineReducers({
  signup,
  login,
  cars,
  car
});
