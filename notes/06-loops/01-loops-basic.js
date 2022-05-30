// =============== FOR LOOP ===============
var fLoop = [];
for (let i = 1; i <= 10; i++) {
  msg = `Hello ${i}`;
  fLoop.push(msg);
}
console.log("For loop: ", fLoop);

const animals = ["lion", "tiger", "bear"];

// =============== FOR LOOP OVER AN ARRAY ===============
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// =============== FOR OF LOOP ===============
//////////   FOR OF LOOP (NEW IN JAVASCRIPT)   //////////
for (let animal of animals) {
  console.log(animal);
}

// =============== NESTED FOR LOOP ===============
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let total_score = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    total_score += row[j];
  }
}
console.log(total_score);

// =============== NESTED FOR  OF LOOP ===============
let totalScore2 = 0;
for (let row of gameBoard) {
  for (let i of row) {
    totalScore2 += i;
  }
}
console.log(totalScore2);

// =============== LOOP OVER AN STRING ===============
myTeam = "Liverpool";
for (let char of myTeam) {
  // Do something in heree
}

// =============== COMBINE THE CORRESPONDING WORDS IN TWO ARRAYS ===============
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

const words3 = [];
for (let i = 0; i < words1.length; i++) {
  let arr = [words1[i], words2[i]];
  words3.push(arr);
}
console.log(words3);

// =============== OBJECTS ===============
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  "Kill Bill": 8,
  "In Bruges": 9,
};

// =============== FOR OF LOOP ===============
for (let key of Object.keys(movieReviews)) {
  console.log(key, movieReviews[key]);
}

// =============== FOR IN LOOP===============
for (let key in movieReviews) {
  console.log(key, movieReviews[key]);
}

// =============== WHILE LOOPS ===============
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

max_guesses = 5;
num_guesses = 0;
while (target !== guess) {
  num_guesses++;
  console.log(`Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);

  if (num_guesses >= max_guesses) {
    console.log("You have reacher your max number of guesses");
    console.log(`The target was: ${target}`);
    break;
  }
}

// =============== DO WHILE LOOPS ===============
var array = [
  { id: 0, name: "John", age: 20 },
  { id: 1, name: "Jane", age: 22 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Ana", age: 26 },
];

var i = 0;
do {
  console.log(array[i].name);
  i++;
} while (i < array.length);

// =============== MAP ===============
var newArray = array.map(function (profile, index, myArr) {
  var newProfile = {
    id: index,
    name: profile.firstName,
    age: profile.age,
  };

  return newProfile;
});
console.log(newArray);

// Example 2:
var newArray2 = array.map((obj) => {
  return obj.name;
});

console.log(newArray2);
