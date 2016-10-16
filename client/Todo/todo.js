import React from 'react';

import {store} from './todo.state.js';

let nextTodoId = 0;
class TodoComponent extends React.Component {
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }}/>
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              payload: {
                text: this.input.value,
                id: nextTodoId++
              }
            })
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => 
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default TodoComponent;