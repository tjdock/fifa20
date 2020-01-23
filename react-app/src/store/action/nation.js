import * as actionTypes from './types';

export const getNations = () => {
  return { type: actionTypes.GET_NATIONS };
};
export const getNationsSuccess = nations => {
  return { type: actionTypes.GET_NATIONS_SUCCESS, nations };
};
