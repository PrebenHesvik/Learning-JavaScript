const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
};

// render the array
renderTodos(todos, filters);

// Submit new todo
document.querySelector('#todo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  todos.push({
    id: uuidv4(),
    text: e.target.elements.todo.value,
    completed: false
  });

  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.todo.value = '';
});

// event-listener for filtering todos
document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// hide completed todos
document.querySelector('#hide-completed').addEventListener('change', function(e) {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
