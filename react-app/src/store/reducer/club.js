import * as actionTypes from '../action/types';

const initialState = {
  clubs: [],
  selectedClub: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CLUBS_SUCCESS:
      return {
        ...state,
        clubs: action.clubs
      };
    case actionTypes.SET_SELECTED_CLUB:
      return {
        ...state,
        selectedClub: action.club
      };
    default:
      return state;
  }
};

export default reducer;
