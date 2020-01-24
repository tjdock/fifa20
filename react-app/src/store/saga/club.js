import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../action/index';

//获取所有俱乐部
export function* getClubsSaga(action) {
  yield put(actions.startLoading());
  try {
    const response = yield axios.get(
      `/ea-clubs?filter[where][leagueId]=${action.leagueId}&filter[order]=name asc`
    );
    yield put(actions.getClubsSuccess(response.data));
    yield put(actions.stopLoading());
  } catch (error) {
    yield put(actions.showSnackbar('error', error.message));
  }
}
