// Primitive types:
  // Number
  // String
  // Boolean
  // Null
  // Undefined


// Variables
  //- method one
let firstName = 'Theo'
  // method two
const firstName = 'Theo'
// const worsk just like let except that you cannot change the value later

// Unary operator
let score = 50
score += 10
score -= 10
score <= 10
score >= 10

// incrase by one
let counter = 0;
counter++;

// decrease by one
counter--;


// Strings
  // combining strings
  let city = "Bergen";
  let country = "Norway";
  let location = city + ", " + country;

  let new_location = city.concat(', ', country)
  // index starts at 0 (just like python)
  let first_letter = city.slice(0, 6)
  // Strings are immutable in JavaScript
  // String methods can be chained (just like python)
  let city_upper = location.toUpperCase().split(', ')[0]
  // template literals (same as f-string in python)
      // only difference is that there is a $-sign before the brackets and
      // javascript uses backticks instead of quote mark
let template_literal = `I counted ${3+4} sheep`;
let username = 'Theo'
let welcome_statement = `Welcome back, ${username.toUpperCase()}`


// null and undefined
  // null
    // intentional absence of any value
    // must be assigned
  // undefined
    // variables that do not have an assigned value are undefined
    // we normally would never assign "undefined" to a variable

let loggedInUser = null  // we expect this variable to change later when a user logs in

// MATH OBJECT
  // the Math object is always available to us in JavaScript and it has several useful methods
let decimalNum = 3.17
let intNume = Math.round(decimalNum)

// TYPEOF
    // returns the type of the object
    // no need to use parentheses
let type_of_obj = typeof 'a random string' // --> "string"

// PARSE INT & PARSE FLOAT
parseInt('24') // --> 24
parseInt('24.987') // --> 24
parseInt('24dayslater') // --> 24

parseFloat('24.987') // --> 24.987
parseFloat('7') // --> 7
parseFloat('i ate 3 shrims') // --> NaN



