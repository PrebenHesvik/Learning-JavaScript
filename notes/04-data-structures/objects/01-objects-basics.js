//////////   OBJECTS  //////////
// Properties are a key value pair
// All property keys inside an object are stored as strings
// Can contain:
//    primitive property (string, number, boolean)
//    object property (object, array)
//    function method

const fitBitData = {
  totalSteps: 30872,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
};

// Acessing data inside an object
let totalMiles = fitBitData.totalMiles;
let totalSteps = fitBitData["totalSteps"];

// updating existing properties
fitBitData.workoutsThisWeek = "6 of 7";
fitBitData.totalMiles += 7.5;

// adding a new property
fitBitData["heartStillBeating"] = true;
fitBitData.musclesSore = false;

//////////   COMPUTED PROPERTIES  //////////
const role = "Host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

// Old way of doing it
var team = {};
team[role] = person;
team[role2] = person2;
console.log(team);

// New way of doing it
var team2 = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};
console.log(team2);

//////////   A FUNCTION THAT ADDS A NEW PROPERTY  //////////
function addProp(obj, k, v) {
  const copy = { ...obj };
  copy[k] = v;
  return copy;
}

const result = addProp(team2, "hobby", "programming");
console.log(result);

// A shorter way of writing the same thing
const addProp2 = (obj, k, v) => {
  return { ...obj, [k]: v };
};
const res = addProp2(team2, "happy", ":)");
console.log(res);

//////////   SHORTHAND OBJECT PROPERTIES  //////////
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg,
  };
};

// With the short hand syntax we can write the return statement like this:
const getStats2 = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return { max, min, sum, avg };
};

const reviews = [4.5, 5.0, 3.4, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);
const stats2 = getStats2(reviews);
console.log(stats, stats2);

//////////   ADDING METHODS TO OBJECTS  //////////
// just showing that functions can be written in slightly different ways
// we can't use THIS inside arrow function because THIS will refer to the window
// and not the object itself.
const math = {
  multiply: function (x, y) {
    return x * y;
  },
  divide: (x, y) => {
    return x / y;
  },
  add: (x, y) => x + y,
  square: (x) => x * x,
};

console.log("math (multiply): ", math.multiply(5, 10));
console.log("math (add): ", math.add(5, 10));

// Method short hand syntax where we don't
// store the function within a key name
const math2 = {
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
};

console.log("math2 (multiply): ", math2.multiply(5, 10));
console.log("math2 (divide): ", math2.divide(5, 10));

//////////   SPREAD  //////////
const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };
const dog = { ...canine, isPet: true };
const catDog = { ...feline, ...canine };
console.log(dog);

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

//////////   DESTRUCTURING  //////////
const runner = {
  firstName: "Eliud",
  lastName: "Kipchoge",
  country: "Kenya",
  title: "Elder for the order of the golden heart of Kenya",
};

// Store firstName, lastName and country as variables
const { firstName, lastName, country } = runner;
console.log(firstName, lastName, country);

// store country and title under new variable names
const { country: nation, title: honorific } = runner;
console.log(nation, honorific);

// store firstName and then the rest of the attributes
const { firstName: fName, ...other } = runner;
console.log(fName, other);

//////////   NESTED DESTRUCTURING  //////////
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    nation: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    nation: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    nation: "United States",
  },
];

// get the nation of the second object/
const [, { nation: pais_espanol }] = results;
console.log(pais_espanol);

// store variables under different names
const [
  { first: goldWinner, nation: bestNation },
  { nation: secondBestNation },
] = results;
console.log(goldWinner, bestNation, secondBestNation);
