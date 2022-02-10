// DEFAULT FUNCTION PARAMETERS
  // old way of assigning default function parameters
function multiply(a, b) {
  y = typeof y === 'undefined' ? 2: y
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
const feline = {legs: 4, family: 'Felidae'};
const canine = {family: 'Caninae', furry: true};
const dog = {...canine, isPet: true}
const catDog = {...feline, ...canine}
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
  for (let i = 0; i < arguments.length; i++){
    total += arguments[i]
  }
  return total
}
    // or use reduce
function sumAllReduce() {
  const argsArr = [...arguments]
  return argsArr.reduce((total, currentVal) => {
    return total + currentVal
  })
}

let sumAllResult = sumAll(8, 4, 3, 2)
console.log(sumAllResult);

// using the rest with for loop
function sumAllRest(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total
}
  // using rest with for loop including the curly braces
function sumAllRest2(...nums) {
  let total = 0;
  for (let i of nums) {
    total += i;
  }
  return total
}
  // using rest with reduce
function sumAllRestReduce(...nums){
  arguments.reduce((total, currVal) => {
    return total + currVal
  })
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
const [first,,third] = raceResults
console.log(first, third);

  // Destructuring objects
const runner = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
  tittle: 'Elder for the order of the golden heart of Kenya'
}
const {firstName, lastName, country} = runner
console.log(firstName, lastName, country);

  // Nested destructuring
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

  // get the nation of the second object
const [, {nation}] = results
console.log(nation);
  // store variables under different names
const [{first: goldWinner, nation: bestNation}, {nation: secondBestNation}] = results
console.log(goldWinner, bestNation, secondBestNation);

  /// Destructuring parameters
  const runnerObj = {
    firstName: 'Eliud',
    lastName: 'Kipchoge',
    country: 'Kenya',
  }

const fullNameFunc = ({first, last}) => {
  return `${firstName} ${lastName}`
}

const fullName2 = fullNameFunc(runnerObj)
console.log(fullName2);