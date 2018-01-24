
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/App/constants';
import { DataLoaded, DataLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getDataFromAPI() {
  const requestURL = 'http://localhost:3000/api/users';

  try {
    const data = yield call(request, requestURL);
    yield put(DataLoaded(data));
  } catch (err) {
    yield put(DataLoadingError(err));
  }
}

export default function* loadData() {
  yield takeLatest(LOAD_DATA, getDataFromAPI);
}
