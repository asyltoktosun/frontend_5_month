import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/reducer';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger/src'


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
);