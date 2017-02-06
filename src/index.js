import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import { createStore } from 'redux'
import manageBand from './reducers/manageBand'

// we wrap store in a function for testing purposes
export function configureStore(){
}




ReactDOM.render(
  <App store={configureStore()} />,
  document.getElementById('root')
);
