import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import TodoComponent from './Todo/todo';
import {todoApp, store} from './Todo/todo.state';
import './Counter/counter.css';

ReactDOM.render(
  <Provider store={store} >
    <TodoComponent/>
  </Provider>,
  document.getElementById('app')
);
