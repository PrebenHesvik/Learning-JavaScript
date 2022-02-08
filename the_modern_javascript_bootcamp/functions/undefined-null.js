// Undefined for variable
let name;

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

// Undefined for function arguments
let square = function(num) {
  console.log(num);
};

// calling a function without providing an argument will return undefined
square();

// this will return undefined because the square function has no return value
let result = square();
console.log(result);

let age = 38;

age = null;

// This will return null, which we use to show that the value has been removed.
console.log(age);
