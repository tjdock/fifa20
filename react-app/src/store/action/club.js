import * as actionTypes from './types';

export const getClubs = leagueId => {
  return { type: actionTypes.GET_CLUBS, leagueId };
};
export const getClubsSuccess = clubs => {
  return { type: actionTypes.GET_CLUBS_SUCCESS, clubs };
};
export const setSelectedClub = club => {
  return { type: actionTypes.SET_SELECTED_CLUB, club };
};
