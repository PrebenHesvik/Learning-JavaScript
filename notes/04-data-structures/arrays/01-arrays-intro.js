// ========================= ARRAYS =========================
//  Lookup: O(1) - constant time
//  Push: O(1) - constant time
//  Insert: O(n) - linear time
//  Delete O(n) - linear time
// HAS THE SMALLES FOOTPRINT OF ANY DATA STRUCTURE IN JAVASCRIPT

// ========================= CREATE AN ARRAY =========================
let numbers = [0, 1, 2, 3, 4, 5, 6];
let names = Array("Beth", "Tom", "Stew");

// ========================= ARRAY INDICES ========================
//    Time complexity: O(1)
numbers[0]; // ==> 0

// ========================= MODIFY AN ARRAY KEY =========================
//    Time complexity: O(1)
names[0] = "John";

// ========================= PUSH ========================
//    add to end of array
//    Time complexity: O(1)
names.push("Nick", "Peter", "Angela");

// ========================= POP =========================
//    Remove from end of array
//    Time complexity: O(1)
let poppedItem = names.pop();

// ========================= SHIFT =========================
//    Removes the first element from an array and returns that removed element.
//    Time complexity: O(1)
let shiftedItem = names.shift();

// ========================= UNSHIFT =========================
//    Adds one or more elements to the beginning of an array and returns the new length of the array.
//    Time complexity: O(n)
//      - requires us reorganize all the keys when we insert at the beginning
names.unshift("Celeste");

// ========================= CONCAT =========================
//    merge arrays
let newNamesList = ["Jonathan", "Jenn"];
names.concat(newNamesList);

// includes - look for a value
// ========================= includes =========================
//    Look for a value
//    true is returned if value is in list, else false is returned
names.includes("Jenn");

// ========================= JOIN =========================
//    Creates a string from an array
const elements = ["Fire", "Air", "Water"];
elements.join("-"); // ==> "Fire-Air-Water"

// ========================= INDEX OF =========================
//    finds index of element, else returns -1
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.indexOf("bison"); // ==> 1

// ========================= REVERSE =========================
//    Reverses an array
let reverseArray = names.reverse();

// ========================= SLICE =========================
//    Copy portion of an array
const animals = ["ant", "bison", "camel", "duck", "elephant"];
animals.slice(0, 2); // ==> ['ant', 'bison']

// ========================= SPLICE =========================
//    Remove/replace elements
//    syntax: splice(start, deleteCount, item1, item2, itemN)
//    Time complexity: O(n)
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // ==>  ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May"); // ==> ["Jan", "Feb", "March", "April", "May"]

// ========================= SORT =========================
//    sorts an array
//    The sort() method sorts the elements of an array in place and returns the sorted array.
//    The default sort order is ascending, built upon converting the elements into strings,
//      then comparing their sequences of UTF-16 code units values.

// ========================= SORT =========================
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(`arr === arr2? ${arr === arr2}`);
console.log(`arr == arr2? ${arr == arr2}`);
// we get false because the arrays are stored in different places in memory
// JavaScript works differently than Python when it comes to comparing arrays

// ========================= DESTRUCTURING =========================
// A short clean syntax to unpack:
// values from arrays and properties from objects into distinct variables
// Destructuring arrays
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
];
const [gold, silver, bronze] = raceResults;
const [fastest, ...everyoneElse] = raceResults;
console.log(gold, silver, bronze);
console.log(fastest, everyoneElse);

// store first and third name as variables
const [first, , third] = raceResults;
console.log(first, third);

// ========================= SPREAD =========================
const cephalapods = ["dumbo octopus", "humboldt squid"];
const cnidaria = ["fire coral", "moon jelly"];
const combinedArrays = [...cephalapods, ...cnidaria];
console.log("combinedArrays: ", combinedArrays);
