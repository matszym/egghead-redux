import React from 'react';
import {connect} from 'react-redux';

let AddTodo = ({dispatch}) => { 
  let input;
  let todoId = 0;

  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            payload: {
              text: input.value,
              id: todoId
            }            
          })
          todoId += 1;
          input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;