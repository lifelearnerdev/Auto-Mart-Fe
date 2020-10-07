import types from './carsActionTypes';


const initialState = {};

const cars = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_CARS_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case types.FETCH_CARS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      cars: action.cars
    };
  case types.FETCH_CARS_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default cars;
