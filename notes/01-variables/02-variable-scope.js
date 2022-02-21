// VARIABLE SCOPPE
//  let and const
//  if assigned inside a func then only avaiable inside the func
//  if assigned in a block of code (loop, if statement) then only
//  available inside that block (block scoped)


// var
//  if assigned inside a func then only avaiable inside the func
//  available outiside the block scope (not block scoped)
//  variables assigned using var can be reassigned again using var
//  var is also hoisted (look at hoisting in javascript)
//  able to reference a function that has been declared later
//  in the script without getting an error


// using let will allow  us to reassign the variable later 
let firstName = 'Theo'
firstName = 'Ada'
console.log(firstName);

// but this would not work for let
let firstName = 'Kate'

// using const wil not lest us reassign the variable later
const color = 'green'
color = 'blue' // <-- will throw an exception

// WINDOW
// 'let' and 'const' is not added to the windows, while 'var' is




