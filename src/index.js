import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, compose } from "redux";
import reducer from './reducers'
import App from './routes/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let initialState = {
  playing: {},
  queue:{},
  recommended:[],
  videos: [],
};

const store = createStore(reducer, initialState, composeEnhancers() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
