import * as actionTypes from '../action/types';

const initialState = {
  leagues: [],
  selectedLeague: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LEAGUES_SUCCESS:
      return {
        ...state,
        leagues: action.leagues
      };
    case actionTypes.SET_SELECTED_LEAGUE:
      return {
        ...state,
        selectedLeague: action.league
      };
    default:
      return state;
  }
};

export default reducer;
