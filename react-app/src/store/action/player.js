import * as actionTypes from './types';

export const getPlayers = (leagueId, clubId, nationId) => {
  return { type: actionTypes.GET_PLAYERS, leagueId, clubId, nationId };
};
export const getPlayersSuccess = players => {
  return { type: actionTypes.GET_PLAYERS_SUCCESS, players };
};
export const setSelectedPlayer = player => {
  return { type: actionTypes.SET_SELECTED_PLAYER, player };
};
