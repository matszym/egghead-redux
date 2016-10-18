import React from 'react';
import ReactDOM from 'react-dom';

import TodoComponent from './Todo/todo';
import {todoApp, store} from './Todo/todo.state';
import './Counter/counter.css';

ReactDOM.render(
  <TodoComponent />,
  document.getElementById('app')
);
