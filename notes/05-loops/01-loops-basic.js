//////////   FOR LOOPS   //////////
for (let i = 1; i <= 10; i++) {
  msg = `Hello ${i}`
  console.log(msg);
}

// looping over an array
const animals = ['lion', 'tiger', 'bear']

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Looping over the array using a for of loop
for (let animal of animals) {
  console.log(animal);
}


//////////   NESTED FOR LOOPS   //////////
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
]

let total_score = 0
for (let i = 0; i < gameBoard.length; i++) {
  row = gameBoard[i]
  for (let j = 0; j < row.length; j++) {
    total_score += row[j]
  }
}
console.log(total_score);

// nestet loop using for of loop
let totalScore2 = 0
for (let row of gameBoard) {
  for (let i of row) {
    totalScore2 += i
  }
}

console.log(totalScore2);



//////////   LOOP OVER AN STRING  //////////
myTeam = 'Liverpool'
for (let char of myTeam) {
  console.log(char)
}



//////////   COMBINE THE CORRESPONDING WORDS IN TWO ARRAYS  //////////
const words1 = ['mail', 'milk', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry']

for (let i = 0; i < words1.length; i++) {
  console.log(words1[i], words2[i]);
}



//////////   LOOP OVER AN OBJECT  //////////
const movieReviews = {
  'Arrival': 9.5,
  'Alien': 9,
  'Kill Bill': 8,
  'In Bruges': 9,
}

for (let key of Object.keys(movieReviews)) {
  console.log(key, movieReviews[key])
}

// For in loop
for (let key in movieReviews) {
  console.log(key, movieReviews[key])
}



//////////   WHILE LOOPS   //////////
let num = 0
while (num < 10) {
  console.log(num)
  num++
}

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

max_guesses = 5
num_guesses = 0
while (target !== guess) {
  num_guesses++
  console.log(`Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10)

  if (num_guesses >= max_guesses) {
    console.log('You have reacher your max number of guesses');
    console.log(`The target was: ${target}`)
    break
  }
}
//console.log(`Target: ${target}, Guess: ${guess}`)


// FOR OF LOOP
