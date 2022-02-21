//////////   PUNCTION EXPRESSION  //////////
const square = function (num) {
  return num * num
}
square(7)

console.dir(square)

const product = function multiply(x, y) {
  return x * y
}

const divide = function (x, y) {
  return x / y
}

const funcs = [product, divide]

for (let func of funcs) {
  let result = func(100, 5);
  console.log(result);
}


//////////   HIGHER ORDER FUNCTIONS  //////////
// Functions that operate on/with other functions. they can:
// Accept other functions as arguments
// Return a function
function multiplyBy(num) {
  return function (x) {
    return x * num;
  }
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5), triple(5));

function makeBetweenFunc(lBound, uBound) {
  return function (age) {
    if (age >= lBound && age <= uBound) {
      return true
    }
    return false
  }
}

function makeBetweenFuncV2(lBound, uBound) {
  return function (age) {
    return age >= lBound && age <= uBound
  }
}

const isYoung = makeBetweenFunc(0, 18);
let result = isYoung(19);
console.log(result);


//////////   CALLBACK FUNCTIONS  //////////
// A callback function is a function passed into another function
// as an argument, which is then invoked inside the outer function
function sayHi() {
  return 'Hi'
}

function sayHello() {
  return 'Hello'
}

function greeting(greet_fn) {
  let greeting = greet_fn()
  return greeting;
}

myGreeting1 = greeting(sayHi)
myGreeting2 = greeting(sayHello)
console.log(myGreeting1, myGreeting2);


//////////   HOISTING  //////////
console.log(animal); // <-- will result in 'undefined' returned, but no error
var animal = 'Tapir';
console.log(animal);

// this will not work with let or const
console.log(team); // <-- will result in an error
let team = 'Liverpool';

console.log(color); // <-- will result in an error
const color = 'green';

// Hoisting works with functions
howl()
function howl() {
  console.log('AWOOOOOOOO');
}



