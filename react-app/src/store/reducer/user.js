import * as actionTypes from '../action/types';

const initialState = {
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token
      };
    case actionTypes.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null
      };

    case actionTypes.TRY_AUTO_LOGIN:
      console.log('try auto login');
      return {
        ...state,
        token: localStorage.getItem('access_token')
      };
    default:
      return state;
  }
};

export default reducer;
