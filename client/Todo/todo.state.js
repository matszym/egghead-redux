const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        Object.assign(
          {}, 
          action.payload,
          {
            completed: false
          })
      ];
    case 'TOGGLE_TODO': 
      return [
        ...state
          .filter(task => task.id < action.payload.id)
          .map(o => Object.assign({}, o)),
        ...state
          .filter(task => task.id === action.payload.id)
          .map(o => Object.assign({}, o, {completed: !o.completed})),
        ...state
          .filter(task => task.id > action.payload.id)
          .map(o => Object.assign({}, o))
      ];
    default:
      return [...state];
  }
}

export default todo;