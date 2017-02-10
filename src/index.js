import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import manageBand from './reducers/manageBand';
import App from './App';


// we wrap store in a function for testing purposes
export function configureStore(){
  
};

ReactDOM.render(
  <App store={configureStore()} />,
  document.getElementById('root')
);
