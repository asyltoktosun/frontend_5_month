import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/reducer';
// import thunk from 'redux-thunk';
import { withExtraArgument } from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(withExtraArgument));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
);
