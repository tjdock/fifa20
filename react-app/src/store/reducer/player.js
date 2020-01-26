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
    case actionTypes.SORT_PLAYERS:
      const updatedPlayers = [...state.players];
      updatedPlayers.sort((a, b) => {
        let diff =
          a.attributes[action.index].value - b.attributes[action.index].value;
        return action.sorting === 'asc' ? diff : -diff;
      });
      return {
        ...state,
        players: updatedPlayers
      };
    default:
      return state;
  }
};

export default reducer;
