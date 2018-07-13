import fetch from 'cross-fetch';
import {
  FETCH_COMPTABILITY,
  FETCH_COMPTABILITY_SUCCESS,
  FETCH_COMPTABILITY_FAILURE,
} from '../../actionTypes/comptability/comptability';


const fetchComptability = () => ({
  type: FETCH_COMPTABILITY
});

const fetchComptabilitySuccess = (data) => ({
  type: FETCH_COMPTABILITY_SUCCESS,
  payload: [data]
});

const fetchComptabilityFailure = (error) => ({
  type: FETCH_COMPTABILITY_FAILURE,
  payload: error
});

const performFetchComptability = () => {
  return (dispatch) => {
    return fetch('http://localhost:4000/comptability')
      .then(res => res.json())
      .then(data => dispatch(fetchComptabilitySuccess(data)))
      .catch(error => dispatch(fetchComptabilityFailure(error)));
  }
}

export const fetchComptabilityIfNeeds = () => {
  return (dispatch, getState) => {
    const { comptabilityData } = getState();
    if (!comptabilityData.data.length) {
      dispatch(fetchComptability());
      return dispatch(performFetchComptability());
    }
    return comptabilityData;
  }
}