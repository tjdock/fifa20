import * as actionTypes from '../action/types';

const initialState = {
  players: [],
  selectedPlayer: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.players
      };
    case actionTypes.SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: action.player
      };
    default:
      return state;
  }
};

export default reducer;
