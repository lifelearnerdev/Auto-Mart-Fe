import { combineReducers } from 'redux';
import signup from '../authentication/signup/signupReducer';
import login from '../authentication/login/loginReducer';

export default combineReducers({
  signup,
  login
});
