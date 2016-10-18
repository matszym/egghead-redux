import React from 'react';

const AddTodo = (props, {store}) => { 
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

AddTodo.contextTypes = {
  store: React.PropTypes.object
}

export default AddTodo;