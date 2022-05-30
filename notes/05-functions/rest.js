// REST
// The opposite of spread bu turning several arguments into an array of args
// before REST we had to use the arguments object:
// ARGUMENTS
// available inside every function
// it's an array like object
// has a length property
// contains all the arguments passed to the function
// but not availble inside of arrow functions
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// or use reduce
function sumAllReduce(...args) {
  return args.reduce((total, currentVal) => {
    return total + currentVal;
  });
}

// without return statement
function sumAllReduce(...args) {
  return args.reduce((total, currentVal) => total + currentVal);
}

function sumAllReduce() {
  const argsArr = [...arguments];
  return argsArr.reduce((total, currentVal) => {
    return total + currentVal;
  });
}

let sumAllResult = sumAll(8, 4, 3, 2);
console.log(sumAllResult);

//  USING REST WITH A FOR LOOP
function sumAllRest(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

// USING REST WITH A FOR LOOP INCLUDING THE CURLY BRACES
function sumAllRest2(...nums) {
  let total = 0;
  for (let i of nums) {
    total += i;
  }
  return total;
}

function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}
const name = fullName("Tom", "Waits", "III", "Mr. Music");
console.log(name);

// Destructuring objects
