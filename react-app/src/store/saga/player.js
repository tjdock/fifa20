import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../action/index';

//获取所有球员
export function* getPlayersSaga(action) {
  yield put(actions.startLoading());
  let url = `/ea-players?filter[where][league.id]=${action.leagueId}&filter[where][club.id]=${action.clubId}&filter[order]=name asc`;
  if (action.nationId) {
    url += `&filter[where][nation.id]=${action.nationId}`;
  }
  try {
    const response = yield axios.get(url);
    yield put(actions.getPlayersSuccess(response.data));
    yield put(actions.stopLoading());
  } catch (error) {
    yield put(actions.showSnackbar('error', error.message));
  }
}
