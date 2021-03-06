// TYPES OF FUNCTIONS
//

/// Destructuring parameters
const runnerObj = {
  firstName: "Eliud",
  lastName: "Kipchoge",
  country: "Kenya",
};

const fullNameFunc = ({ first, last }) => {
  return `${firstName} ${lastName}`;
};

const fullName2 = fullNameFunc(runnerObj);
console.log(fullName2);

// DESTRUCTURING AN ARRAY
const response = ["HTTP/1.1", "200 OK", "application/json"];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(statusCode);
}

parseResponse(response);

// SPREAD
// For function calls
// expands an iterable into a list of arguments
const nums = [9, 3, 2, 8];
// Math.max(nums) will return NaN
const maxNum = Math.max(...nums);
console.log("maxNum: ", maxNum);
/////////////////////////

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    let rolled = rollDie();
    console.log(`Rolled die ${i + 1}: `, rolled);
  }
}

//////////  CHECK COLOR  //////////
function isPurple(color) {
  return color.toLowerCase() == "purple";
}

let colors = ["blue", "red", "purple"];

function containsPurple(arr) {
  // Returns true if purple is present in array
  for (let color of arr) {
    if (color.toLowerCase() === "purple") {
      return true;
    }
  }
  return false;
}

// DEFAULT FUNCTION PARAMETERS
// old way of assigning default function parameters
function multiply(a, b) {
  if (typeof b == "undefined") {
    b = 1;
  }
  return a + b;
}

// old way with ternary
function multiply(a, b) {
  b = typeof b === "undefined" ? 2 : b;
  return a * b;
}

// new way of doing it (just like python)
function multiply(a, b = 2) {
  return a * b;
}

//////////   PASSWORD CHECKER  //////////
function enoughChars(pwd) {
  return pwd.length >= 8;
}

function noSpaces(pwd) {
  let result = pwd.search(" ");
  // pwd.search(' ') wil return -1 if a space is not found
  if (result === -1) {
    return true;
  }
  return false;
}

function noUsernameInPwd(username, pwd) {
  // ! negates the statement just like not in python
  return !pwd.includes(username);
}

function isValidPassword(username, password) {
  let isEnoughChars = enoughChars(password);
  let isNoSpaces = noSpaces(password);
  let isNoUsernameInPwd = noUsernameInPwd(username, password);

  if (isEnoughChars && isNoSpaces && isNoUsernameInPwd) {
    return true;
  }
  return false;
}

// a better way to do it
function isPasswordValid(username, password) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(username) !== 1
  ) {
    return false;
  }
  return true;
}

function isPasswordValid2(username, password) {
  const tooShort = password.lenth < 8;
  const hasSpaces = password.indexOf(" ") !== -1;
  const containsUsername = password.indexOf(username) !== 1;

  if (tooShort || hasSpaces || containsUsername) {
    return false;
  }
  return true;
}

function isPasswordValid3(username, password) {
  const tooShort = password.lenth < 8;
  const hasSpaces = password.indexOf(" ") !== -1;
  const containsUsername = pwd.includes(username);
  if (tooShort || hasSpaces || containsUsername) return false;
  return true;
}

//////////   FUNCTION THAT FIND THE AVERAGE OF AN ARRAY //////////
function addNumbersInArray(arr) {
  total = 0;
  for (let i of arr) {
    total += i;
  }
  return total / arr.length;
}

const numbers = [5, 10, 15];

//////////   PANGRAM CHECKER //////////
function isPangram(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let letter of alphabet) {
    if (!sentence.toLowerCase().includes(letter)) {
      return false;
    }
    return true;
  }
}

//////////   GET A PLAYING CARD    //////////
function drawCard() {
  const value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  let valueRandVal = Math.floor(Math.random() * value.length);
  let suitsRandVal = Math.floor(Math.random() * suits.length);

  card = {
    value: value[valueRandVal],
    suit: suits[suitsRandVal],
  };

  return card;
}

function drawCard2() {
  const value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  let valueRandVal = Math.floor(Math.random() * value.length);
  let suitsRandVal = Math.floor(Math.random() * suits.length);

  return {
    value: value.slice(valueRandVal, valueRandVal + 1),
    suit: suits.slice(suitsRandVal, suitsRandVal + 1),
  };
}
