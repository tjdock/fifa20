import * as actionTypes from './types';

export const getLeagues = () => {
  return { type: actionTypes.GET_LEAGUES };
};
export const getLeaguesSuccess = leagues => {
  return { type: actionTypes.GET_LEAGUES_SUCCESS, leagues };
};
export const setSelectedLeague = league => {
  return { type: actionTypes.SET_SELECTED_LEAGUE, league };
};
