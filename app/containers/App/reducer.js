import { fromJS } from 'immutable';

import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  FOLLOW_USER,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('data', false);
    case LOAD_DATA_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case FOLLOW_USER:
      return state
        .set(data, action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
