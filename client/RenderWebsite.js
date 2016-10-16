import React from 'react';
import ReactDOM from 'react-dom';

import TodoComponent from './Todo/todo';
import {todoApp, store} from './Todo/todo.state';
import './Counter/counter.css';

const render = () => {
  ReactDOM.render(
    <TodoComponent
      todos={store.getState().todos}
    />,
    document.getElementById('app')
  );  
}

store.subscribe(render);
render();
