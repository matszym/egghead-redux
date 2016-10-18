import React from 'react';

import {store} from './todo.state';

const AddTodo = ({onAddClick}) => { 
  let input;
  let todoId = 0;
  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button
        onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            payload: {
              text: input.value,
              id: todoId
            }
          });
          todoId += 1;
          input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;