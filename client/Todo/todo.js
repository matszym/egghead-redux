import React from 'react';
import {store} from './todo.state.js';

import AddTodo from './AddTodo';
import Footer from './Footer';

let nextTodoId = 0;

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li 
    onClick={onClick}
    style={{
      textDecoration: completed
      ? 'line-through'
      : 'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => 
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

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
        <AddTodo 
          onAddClick={ 
            text => 
              store.dispatch({
                type: 'ADD_TODO',
                payload: {
                  id: nextTodoId++,
                  text
                }
              })
          }
        />
        <TodoList 
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              payload: {
                id
              }
            })
          } />
        <Footer 
          visibilityFilter={visibilityFilter}
          onFilterClick={filter => store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
              filter
            }
          })}
        />
      </div>
    );
  }
}

export default TodoComponent;