const todos = [
  {
    text: "Closures",
    completed: false
  },
  {
    text: "Decorators",
    completed: false
  },
  {
    text: "Arrays",
    completed: true
  }
];

function deleteTodo(array, todo) {
  const index = array.findIndex(function(item, index) {
    return item.text.toLowerCase() == todo.toLowerCase();
  });
  if (index > -1) {
    array.splice(index, 1);
  }
}

console.log("Before index");
console.log(todos);
deleteTodo(todos, "arrays");
console.log("After index");
console.log(todos);
