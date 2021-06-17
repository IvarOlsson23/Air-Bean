import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {Provider} from 'react-redux';
import store from './redux/store';
// import {createStore} from 'redux';

import { getTodos,} from '../src/redux/CoffeShop/actions'

export function fetchTodos() {
    return async dispatch => {
        const response = await fetch('http://awesome-todo-api.herokuapp.com/tasks');
        const data = await response.json();
        dispatch(getTodos(data));

        return data;
    }
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
