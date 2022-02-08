const notes = ["Note 1", "Note 2", "Note 3"];

// slicing - index starts at 0
console.log(notes[0]);

// add an item to the array
notes.push("Note 4"); // will insert it at the end of the array
console.log(notes);

// remove an item form the array
let popped_item = notes.pop();
console.log(popped_item);

// remove the first element of the array
let first_element = notes.shift();
console.log(first_element);

// add an element to the start of the list
notes.unshift("First note");

console.log(notes);

// remove Note 2 which is at index 1
notes.splice(1, 1);
console.log(notes);

// add a new item at index 1
notes.splice(1, 0, "This is the new item at index 1");
console.log(notes);

// change a value in the array
notes[0] = "I am not changing the value of index 0";
