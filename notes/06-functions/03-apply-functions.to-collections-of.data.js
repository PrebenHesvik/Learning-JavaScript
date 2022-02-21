//////////   FOR EACH  //////////
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
nums.forEach(function (n) {
  console.log(n * n);
})

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'A gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
]

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
})


//////////   MAP //////////
const texts = ['rofl', 'lol', 'omg', 'ttyl']
const caps = texts.map(function (t) {
  return t.toUpperCase();
})

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const number_details = numbers.map(function (num) {
  return {
    value: num,
    isEven: num % 2 === 0
  }
})

const titles = books.map(function (book) {
  return book.title
})

const bigBookMapper = function (book) {
  return book.title
}
const new_titles = books.map(bigBookMapper)



//////////   ARROW FUNCTIONS  //////////
// A syntactically compact alternative to a regular function expression
const square = (x) => {
  return x * x;
}

const isEven1 = (num) => {
  return num % 2 === 0;
}

// if an arrow function only has one parameter we don't need parentheses
const isEven2 = num => {
  return num % 2 === 0;
}

// arrow function implicit return and no parentheses around the argument
const isEven3 = num => (
  num % 2 === 2
)


//////////   ARROW FUNCTION IMPLICIT RETURN ONE-LINER  //////////
const isEven4 = num => num % 2 === 0;

const mult = num => num * num;

const words_arr = ['Profit', 'Loss']
const words_upper = words_arr.map(word => word.toUpperCase())
console.log(words_upper);

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const parityList = numArray.map(n => n % 2 === 0 ? 'even' : 'odd');
console.log(parityList);


//////////   FIND  //////////
const movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds'
]

// find only returns the first value that matches the criteria given
let movie = movies.find(movie => movie.includes('Mrs.'));  // Mr. and Mrs. Smith
let movie2 = movies.find(movie => movie.indexOf('Mrs') === 0) // Mrs. Doubtfire
console.log(movie);


//////////   FILTER  //////////
// filters array based on criteria and returns a new array
// that matches the filters
const nums_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const odds = nums_arr.filter(n => n % 2 == 1)
const smallNums = nums_arr.filter(n => n < 5)
console.log(odds, smallNums);


//////////   EVERY  //////////
// tests wheter all elements in the array pass the provided function
// returns a boolean value
const words = ['dog', 'dig', 'log', 'bag', 'wag']
const wordsAnswer1 = words.every(word => word.length == 3);
const wordsAnswer2 = words.every(word => word[0] == 'd');
const wordsAnswer3 = words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g'
})
console.log(wordsAnswer1, wordsAnswer2, wordsAnswer3);


//////////   SOME  //////////
// same as EVERY except that here only some of the values in an 
// array must fit the criteria
const words1 = ['dog', 'dig', 'log', 'bag', 'wag'];
const startWithL = words1.some(word => word.startsWith('l'));
console.log(startWithL);


//////////   SORT  //////////
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500]
const ascSort = prices.sort((a, b) => a - b);
const descSort = prices.sort((a, b) => b - a);
console.log(descSort);


//////////   REDUCE  //////////
// Executes a reducer function on each element in the array
// resulting in a single value
const numbers_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const totalNumbers = numbers_arr.reduce((total, currentVal) => {
  return total + currentVal
})
console.log(totalNumbers);

// FIND MAX GRADE
const grades = [89, 96, 58, 77, 62, 93, 81, 99, 73]

// Solution 1
const topScore = grades.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
})
// solution 2
const topScore2 = grades.reduce((max, currentVal) => (
  Math.max(max, currentVal)
))
console.log(topScore, topScore2);

// // COUNT NUMBER OF VOTES
const votes = ['yes', 'yes', 'no', 'yes', 'no', 'yes', 'no'];

// solution 1
const results = votes.reduce((tally, val) => {
  // start from empty object '{}' and check if  tally['yes] exixsts
  // if the answer is true add 1 to the existing value
  if (tally[val]) {
    tally[val]++
  }

  // if yes does not exist as a key in the object then 
  // create it and set the value to 1
  else {
    tally[val] = 1;
  }
  return tally;
  // {} is the initial value of the reduce function
}, {})

// solution 2
const results2 = votes.reduce((tally, vote) => {
  // tally['yes'] will be set to tally['yes'] + 1 if it already exists
  // or sett to 0 + 1 if it does not already exist
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {});
console.log(results, results2);


