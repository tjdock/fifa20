/*For IE11*/
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import * as serviceWorker from './serviceWorker';

/*router import (BrowserRouter 或者 HashRouter)*/
import { BrowserRouter } from 'react-router-dom';

/*axios import*/
import { API_URL } from './shared/Consts';
import axios from 'axios';

/*redux import*/
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import mainReducer from './store/reducer/main';
import nationReducer from './store/reducer/nation';
import { watchNations } from './store/saga';

/*redux settings*/
const rootReducer = combineReducers({
  main: mainReducer,
  nation: nationReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(watchNations);

/*axios settings*/
axios.defaults.baseURL = API_URL;

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
