import * as actionTypes from './types';

export const getPlayers = (leagueId, clubId, nationId) => {
  return { type: actionTypes.GET_PLAYERS, leagueId, clubId, nationId };
};
export const getPlayersSuccess = players => {
  return { type: actionTypes.GET_PLAYERS_SUCCESS, players };
};

export const getPlayerDetail = playerId => {
  return { type: actionTypes.GET_PLAYER_DETAIL, playerId };
};
export const getPlayerDetailSuccess = player => {
  return { type: actionTypes.GET_PLAYER_DETAIL_SUCCESS, player };
};
