import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../action/index';
import { AUTH_HEADERS } from '../../shared/Consts';

//获取所有国籍
export function* getNationsSaga() {
  yield put(actions.startLoading());
  try {
    const response = yield axios.get(
      '/ea-nations?filter[order]=name asc',
      AUTH_HEADERS()
    );
    yield put(actions.getNationsSuccess(response.data));
    yield put(actions.stopLoading());
  } catch (error) {
    yield put(actions.showSnackbar('error', error.message));
  }
}
