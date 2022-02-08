// Fetch todos from localStorage
const getSavedTodos = function() {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON != null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// save todos
const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// remove a todo by id
const removeTodo = function(id) {
  const todoIndex = todos.findIndex(function(todo) {
    return todo.id == id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// function that filters an array
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompleteMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompleteMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  // remaining todos
  const summary = document.createElement('h3');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  // create html element of each filtered todo
  filteredTodos.forEach(function(todo) {
    document.querySelector('#todos').appendChild(generateDOM(todo));
  });
};

// Generate DOM elements
const generateDOM = function(todo) {
  const todoDiv = document.createElement('div');
  const todoCheck = document.createElement('input');
  const todoTxt = document.createElement('span');
  const todoBtn = document.createElement('button');

  // set todoCheck attribute
  todoCheck.setAttribute('type', 'checkbox');
  todoDiv.appendChild(todoCheck);

  // Setup todoTxt
  todoTxt.textContent = todo.text;
  todoDiv.appendChild(todoTxt);

  // Set up todoBtn
  todoBtn.textContent = 'x';
  todoDiv.appendChild(todoBtn);
  todoBtn.addEventListener('click', function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoDiv;
};
