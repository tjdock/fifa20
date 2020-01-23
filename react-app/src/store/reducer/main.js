import * as actionTypes from '../action/types';

const initialState = {
  loading: false,
  redirectPath: null,
  snackbar: { type: null, msg: null }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
        snackbar: { type: null, msg: null }
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case actionTypes.SET_REDIRECT_PATH:
      return {
        ...state,
        redirectPath: action.redirectPath
      };
    case actionTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: action.snackbar,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
