import * as actions from '../action/index';
import axios from 'axios';
import { put } from 'redux-saga/effects';

export function* loginSaga(action) {
  //yield put(actions.startLoading());
  try {
    let data = {
      email: action.email,
      password: action.password
    };
    const response = yield axios.post('/users/login', data);

    yield put(actions.loginSuccess(response.data));
    localStorage.setItem('access_token', response.data.token);
    localStorage.setItem('token_type', 'Bearer');
    //yield put(actions.stopLoading());
  } catch (error) {
    //yield put(actions.showSnackbar('error', error.message));
    console.log(error.message);
  }
}
