import { combineReducers, createStore } from 'redux';

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

const visibilityFilter = (state = 'SHOW_ALL', action = {}) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

let store = createStore(
  todoApp
);

export {todos, visibilityFilter, todoApp, store};