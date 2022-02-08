const todos = [
  {
    text: 'Closures',
    completed: false
  },
  {
    text: 'Decorators',
    completed: true
  },
  {
    text: 'Arrays',
    completed: false
  }
];

const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Barcelona'
  },
  {
    title: 'Habits to work on',
    body: 'Exercise'
  },
  {
    title: 'Advanced Programming',
    body: 'Become a skillful programmer'
  }
];

// sort todo-array alphabetically
const sortArray = function(array, noteTitle) {
  array.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortArray(notes);
console.log(notes);
console.log('------------------------------------------');

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (a.completed < b.completed) {
      return -1;
    } else if (a.completed > b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

console.log('-----------------------------------------');
// another way to write the function
const sortTodos2 = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos2(todos);
console.log(todos);
