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
          .map(task => {
            let toggleCompleted = {};

            if (task.id === action.payload.id) {
              toggleCompleted.completed = !task.completed;
            }

            return Object.assign({}, task, toggleCompleted);
          })
      ];
    default:
      return [...state];
  }
}

export default todo;