const todos = [
  {
    text: "Closures",
    completed: false,
  },
  {
    text: "Decorators",
    completed: false,
  },
  {
    text: "Arrays",
    completed: true,
  },
];

const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Barcelona",
  },
  {
    title: "Habits to work on",
    body: "Exercise",
  },
  {
    title: "Programming",
    body: "Become a skillful programmer",
  },
];

// filter - filter array
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);

// filter the notes array
// the filter functions returns a new array, and does not make changes to current array
const filteredNotes = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLowerCase().includes("ex");
  const isBodyMatch = note.body.toLowerCase().includes("ex");
  return isTitleMatch || isBodyMatch;
});

console.log(filteredNotes);
console.log("-----------------------------");

// change the function so the search text can be provided as an argument
const findNotes = function (array, query) {
  return array.filter(function (element, index) {
    const isTitleMatch = element.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const isBodyMatch = element.body
      .toLowerCase()
      .includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

const found = findNotes((array = notes), (query = "program"));
console.log(found);

const findCompleted = function (array) {
  return array.filter(function (element, index) {
    return !element.completed; // used instead of element.completed === false
  });
};

console.log("-----------------------------");

console.log(findCompleted(todos));
