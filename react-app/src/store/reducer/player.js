import * as actionTypes from '../action/types';

const initialState = {
  players: [],
  player: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYERS_SUCCESS:
      return {
        ...state,
        players: action.players
      };
    case actionTypes.GET_PLAYER_DETAIL_SUCCESS:
      return {
        ...state,
        player: action.player
      };
    default:
      return state;
  }
};

export default reducer;
