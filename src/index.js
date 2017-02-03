import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { createStore } from 'redux'
import manageBand from './reducers/manageBand'
// function(){}

// we wrap store in a function for testing purposes
export function configureStore(){
  return createStore(manageBand, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}




ReactDOM.render(
  <App store={configureStore()} />,
  document.getElementById('root')
);
