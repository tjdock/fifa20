import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../action/types';
import { getNationsSaga } from './nation';
import { getLeaguesSaga } from './league';
import { getClubsSaga } from './club';
import { getPlayersSaga, getPlayerDetailSaga } from './player';

export function* watchNations() {
  yield takeEvery(actionTypes.GET_NATIONS, getNationsSaga);
}

export function* watchLeagues() {
  yield takeEvery(actionTypes.GET_LEAGUES, getLeaguesSaga);
}

export function* watchClubs() {
  yield takeEvery(actionTypes.GET_CLUBS, getClubsSaga);
}

export function* watchPlayers() {
  yield takeEvery(actionTypes.GET_PLAYERS, getPlayersSaga);
  yield takeEvery(actionTypes.GET_PLAYER_DETAIL, getPlayerDetailSaga);
}
