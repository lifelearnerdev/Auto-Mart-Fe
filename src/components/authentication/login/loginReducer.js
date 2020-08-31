import types from './loginActionTypes';
import userAuth from './isAuth';

const user = userAuth();

const initialState = {
  ...user
};

const login = (state = initialState, action) => {
  switch (action.type) {
  case types.LOGIN_LOADING:
    return {
      ...state,
      isLoading: true,
      error: undefined
    };
  case types.LOGIN_SUCCESS:
    return {
      ...state,
      isLoading: false,
      message: action.message,
      isAuthenticated: true
    };
  case types.LOGIN_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default login;
