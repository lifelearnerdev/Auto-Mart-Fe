import types from './signupActionTypes';

const initialState = {};
const signup = (state = initialState, action) => {
  switch (action.type) {
  case types.SIGNUP_LOADING:
    return {
      ...state,
      isLoading: true,
      error: undefined
    };
  case types.SIGNUP_SUCCESS:
    return {
      ...state,
      isLoading: false,
      message: action.message
    };
  case types.SIGNUP_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default signup;
