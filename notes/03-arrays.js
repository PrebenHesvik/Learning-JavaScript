// create an array
let numbers = [0, 1, 2, 3, 4, 5, 6]
let names = Array('Beth', 'Tom', 'Stew')

// Loop over an array
names.forEach(function(item, index, array) {
  console.log(item, index)
})

// array indices
numbers[0] // --> 0

// modifying array key
names[0] = 'John'

// Push - add to end of array
names.push('Nick', 'Peter', 'Angela')

// Pop - remove from end of array
let poppedItem = names.pop()

// Shift - remove from start of array
let shiftedItem = names.shift()

// Unshift - add to start of array
names.unshift('Celeste')

// concat - merge arrays
let newNamesList = ['Jonathan', 'Jenn']
names.concat(newNamesList)

// includes - look for a value
  // true is returned if value is in list, else false is returned
names.includes('Jenn')

// join - creates a string from array
const elements = ['Fire', 'Air', 'Water']
elements.join('-') // --> "Fire-Air-Water"

// index of - finds index of element, else returns -1
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
beasts.indexOf('bison') // --> 1

// reverse - reverses an array
let reverseArray = names.reverse()

// slice - copy portion of an array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(0, 2) // --> ['ant', 'bison']

// splice - remove/replace elements
  // syntax: splice(start, deleteCount, item1, item2, itemN)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // new array will be ["Jan", "Feb", "March", "April", "June"]

// sort - sorts an array
  // The sort() method sorts the elements of an array in place and returns the sorted array.
  // The default sort order is ascending, built upon converting the elements into strings,
  //then comparing their sequences of UTF-16 code units values.

  // filter - filter array
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

