import * as actionTypes from './types';

export const login = (email, password) => {
  return { type: actionTypes.LOGIN, email, password };
};
export const loginSuccess = token => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token
  };
};
export const logout = () => {
  return { type: actionTypes.LOGOUT };
};

export const tryAutoLogin = () => {
  return { type: actionTypes.TRY_AUTO_LOGIN };
};
