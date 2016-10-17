import React from 'react';
import {store} from './todo.state.js';

import FilterLink from './FilterLink';

let nextTodoId = 0;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}

class TodoComponent extends React.Component {
  render() {
    const {todos, visibilityFilter} = this.props;
    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    );

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
          {visibleTodos.map(todo => 
            <li 
              key={todo.id}
              onClick={() => store.dispatch({
                type: 'TOGGLE_TODO',
                payload: {
                  id: todo.id
                }}
              )}
              style={{
                textDecoration: todo.completed
                ? 'line-through'
                : 'none'
              }}
            >
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoComponent;