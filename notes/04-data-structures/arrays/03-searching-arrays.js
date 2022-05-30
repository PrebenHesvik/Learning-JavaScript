const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Barcelona"
  },
  {
    title: "Habits to work on",
    body: "Exercise"
  },
  {
    title: "Programming",
    body: "Become a skillful programmer"
  }
];

// find the index of a note title
const index = notes.findIndex(function(note, index) {
  return note.title === "Programming"; // the method stops running as soon as it finds a match
});

console.log(index);

// return an object that matches what you are seaching for
const findNote = function(notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase(); // toLowerCase method is used to make the search function case insensitive
  });
  return notes[index];
};

const note = findNote(notes, "Programming");
console.log(note);

// Using the find method
const findNote2 = function(notes, noteTitle) {
  const note = notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  return note;
};

// the difference here is that the find method finds the object directly
// so we can refernce the object instead of the index.
const note2 = findNote(notes, "My next trip");
console.log(note2);

// we can even make this function better
const findNote3 = function(array, noteTitle) {
  return notes.find(function(note, index) {
    return note.title.toLowerCase() == noteTitle.toLowerCase();
  });
};
const note3 = findNote(notes, "habits to work on");
console.log(note3);
