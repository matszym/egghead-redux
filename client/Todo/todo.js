const toggleTodo = todo => {
  return Object.assign({}, todo, { completed: !todo.completed });
}

export { toggleTodo };