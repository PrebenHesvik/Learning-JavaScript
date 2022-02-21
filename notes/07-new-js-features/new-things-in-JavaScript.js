// DEFAULT FUNCTION PARAMETERS
// old way of assigning default function parameters
function multiply(a, b) {
  if (typeof b == 'undefined') {
    b = 1
  }
  return a + b
}

// old way with ternary
function multiply(a, b) {
  b = typeof b === 'undefined' ? 2 : b
  return a * b;
}

// new way of doing it (just like python)
function multiply(a, b = 2) {
  return a * b;
}

// SPREAD
// For function calls
// expands an iterable into a list of arguments
const nums = [9, 3, 2, 8]
// Math.max(nums) will return NaN
const maxNum = Math.max(...nums)
console.log('maxNum: ', maxNum);

// Spread in array literals
const cephalapods = ['dumbo octopus', 'humboldt squid']
const cnidaria = ['fire coral', 'moon jelly']
const combinedArrays = [...cephalapods, ...cnidaria]
console.log('combinedArrays: ', combinedArrays);

// Spread in object literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };
const dog = { ...canine, isPet: true }
const catDog = { ...feline, ...canine }
console.log(dog);

// REST
// The opposite of spread bu turning several arguments into an array of args
// before REST we had to use the arguments object:
// available inside every function
// it's an array like object
// has a length property
// contains all the arguments passed to the function
// but not availble inside of arrow functions
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

// or use reduce
function sumAllReduce(...args) {
  return args.reduce((total, currentVal) => {
    return total + currentVal
  })
}

// without return statement
function sumAllReduce(...args) {
  return args.reduce((total, currentVal) => total + currentVal)
}


function sumAllReduce() {
  const argsArr = [...arguments]
  return argsArr.reduce((total, currentVal) => {
    return total + currentVal
  })
}

let sumAllResult = sumAll(8, 4, 3, 2)
console.log(sumAllResult);


//  USING REST WITH A FOR LOOP
function sumAllRest(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total
}


// USING REST WITH A FOR LOOP INCLUDING THE CURLY BRACES
function sumAllRest2(...nums) {
  let total = 0;
  for (let i of nums) {
    total += i;
  }
  return total
}


function fullName(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}
const name = fullName('Tom', 'Waits', 'III', 'Mr. Music')
console.log(name);

// DESTRUCTURING
// A short clean syntax to unpack:
// values from arrays and properties from objects into distinct variables
// Destructuring arrays
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreslassie']
const [gold, silver, bronze] = raceResults;
const [fastest, ...everyoneElse] = raceResults;
console.log(gold, silver, bronze);
console.log(fastest, everyoneElse);

// store first and third name as variables
const [first, , third] = raceResults
console.log(first, third);

// Destructuring objects
const runner = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder for the order of the golden heart of Kenya'
}

// Store firstName, lastName and country as variables
const { firstName, lastName, country } = runner
console.log(firstName, lastName, country);

// store country and title under new variable names
const { country: nation, title: honorific } = runner
console.log(nation, honorific);

// store firstName and then the rest of the attributes
const { firstName: fName, ...other } = runner
console.log(fName, other);

// NESTED DESTRUCTURING
const results = [
  {
    first: 'Eliud',
    last: 'Kipchoge',
    nation: 'Kenya'
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    nation: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    nation: 'United States'
  },
]

// get the nation of the second object/
const [, { nation: pais_espanol }] = results
console.log(pais_espanol);


// store variables under different names
const [{ first: goldWinner, nation: bestNation }, { nation: secondBestNation }] = results
console.log(goldWinner, bestNation, secondBestNation);

/// Destructuring parameters
const runnerObj = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
}

const fullNameFunc = ({ first, last }) => {
  return `${firstName} ${lastName}`
}

const fullName2 = fullNameFunc(runnerObj)
console.log(fullName2);


// DESTRUCTURING AN ARRAY
const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
  console.log(statusCode);
}

parseResponse(response)