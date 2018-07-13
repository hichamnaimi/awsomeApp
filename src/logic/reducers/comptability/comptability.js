import {
  FETCH_COMPTABILITY,
  FETCH_COMPTABILITY_SUCCESS,
  FETCH_COMPTABILITY_FAILURE
} from '../../actionTypes/comptability/comptability';

const initialState = {
  isFetching: false,
  isError: false,
  data: []
};

const comptabilityReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COMPTABILITY:
      return { ...state, isFetching: true };
    case FETCH_COMPTABILITY_SUCCESS:
      return { ...state, isFetching: false, isError: false, data: action.payload }
    case FETCH_COMPTABILITY_FAILURE:
      return { ...state, isFetching: false, isError: action.payload };
    default:
      return state;
  }
}

export default comptabilityReducer;

