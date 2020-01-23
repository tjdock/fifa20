import * as actionTypes from '../action/types';

const initialState = {
  nations: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NATIONS_SUCCESS:
      return {
        ...state,
        nations: action.nations
      };
    default:
      return state;
  }
};

export default reducer;
