import types from './carActionTypes';


const initialState = { isLoading: true };

const car = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_CAR_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case types.FETCH_CAR_SUCCESS:
    return {
      ...state,
      isLoading: false,
      car: action.car
    };
  case types.FETCH_CAR_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default car;
