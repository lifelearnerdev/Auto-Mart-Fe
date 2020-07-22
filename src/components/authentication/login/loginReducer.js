import types from './loginActionTypes';

const initialState = {};
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
      message: action.message
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
