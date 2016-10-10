import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import CounterComponent from './Counter/CounterComponent.js';
import {counter} from './Counter/counter.state';

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = () => {
  ReactDOM.render(
    <CounterComponent 
      value={ store.getState() }
      onIncrease={ () => store.dispatch({ type: "INCREMENT" }) }
      onDecrease={ () => store.dispatch({ type: "DECREMENT" }) }
    />,
    document.getElementById('app')
  );  
}

store.subscribe(render);
render();

setInterval(function() {
  console.log(store.getState());
}, 1000);