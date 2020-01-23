import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../action/types';
import { getNationsSaga } from './nation';

export function* watchNations() {
  yield takeEvery(actionTypes.GET_NATIONS, getNationsSaga);
}
