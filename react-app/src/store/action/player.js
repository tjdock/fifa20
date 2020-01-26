import * as actionTypes from './types';

export const getPlayers = (
  leagueId,
  clubId,
  nationId,
  sortingName,
  sorting
) => {
  return {
    type: actionTypes.GET_PLAYERS,
    leagueId,
    clubId,
    nationId,
    sortingName,
    sorting
  };
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
export const sortPlayers = (index, sorting) => {
  return { type: actionTypes.SORT_PLAYERS, index, sorting };
};
