let name = "Theo Hesvik";
console.log("Name: ", name);

// length of string
console.log("Length of string: ", name.length);

// convert to uppercase
console.log("uppercase: ", name.toUpperCase);

// convert to lowercase
console.log("uppercase: ", name.toLowerCase);

// function for determining if a password is valid
// password must have more than 8 characters and
// not contain the word password
let isValidPassword = function(password) {
  return password.length > 8 && !password.includes("password");
};
