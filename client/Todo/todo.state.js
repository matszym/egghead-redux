const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, action.payload, {completed: false})
    case 'TOGGLE_TODO':
      if (state.id !== action.payload.id) {
        return Object.assign({}, state);
      }

      return Object.assign({}, state, {completed: !state.completed})
    default:
      return Object.assign({}, state);
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(state, action)
      ];
    case 'TOGGLE_TODO': 
      return state
          .map(task => todo(task, action));
    default:
      return [...state];
  }
}

export default todos;