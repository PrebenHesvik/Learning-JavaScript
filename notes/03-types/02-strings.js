// ========== STRINGS==========
// combining strings
let city = "Bergen";
let country = "Norway";
let location = city + ", " + country;

let new_location = city.concat(", ", country);

// index starts at 0 (just like python)
let first_letter = city.slice(0, 6);

// Strings are immutable in JavaScript
// String methods can be chained (just like python)
let city_upper = location.toUpperCase().split(", ")[0];

// template literals (same as f-string in python)
// only difference is that there is a $-sign before the brackets and
// javascript uses backticks instead of quote mark
let template_literal = `I counted ${3 + 4} sheep`;
let username = "Ada";
let welcome_statement = `Welcome back, ${username.toUpperCase()}`;

let name = "Ada Lovelace";
console.log("Name: ", name);

// length of string
console.log("Length of string: ", name.length);

// convert to uppercase
console.log("uppercase: ", name.toUpperCase());

// convert to lowercase
console.log("lowercase: ", name.toLowerCase());

// function for determining if a password is valid
// password must have more than 8 characters and
// not contain the word password
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes("password");
};

// ========== STRING LITERAL VS OBJECT REPRESENTATION OF STRING ==========
// new String("Ada") does not create a string but an object
const myStr = "Ada";
const myStr2 = new String("Ada");
console.log("'Ada'=='new String(Ada)'", myStr == myStr2);
console.log("'Ada'==='new String(Ada)'", myStr === myStr2);
console.log("typeof new String('Ada')", typeof myStr2);

// If we use a method of a string, javascript automatically
// converts it into an object
console.log("Liverpool".length);
