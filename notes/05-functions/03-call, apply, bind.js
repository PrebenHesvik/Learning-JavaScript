const wizard = {
  name: "Merlin",
  health: 50,
  heal(points, bonus_points) {
    return (this.health += points + bonus_points);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

// ========== CALL ==========
// Calls a function or method of an object, substituting another object for the current object.
// We can insert the object we want this to refer to.

// we can borrow the heal function from the wizard object
// and use it to heal the archer
wizard.heal.call(archer, 30, 5);
console.log("archer (call): ", archer);

// ========== APPLY ==========
// Apply works the same way as call, except that instead
// of several parameters it takes an array of parameters

wizard.heal.apply(archer, [30, 10]);
console.log("archer2 (apply): ", archer);

// call and apply are useful for borrowing methods

// ========== BIND ==========
// bind is useful to call functions later on within a certain context
const healArcher = wizard.heal.bind(archer, 30, 15);
healArcher();
console.log("archer (bind): ", archer);

// ========== FUNCTION CURRYING ==========
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log("multiplyByTwo: ", multiplyByTwo(10));

// BIND
// Creates a copy of the function with a specified "this"-keyword
var person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    var fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
};

var logName = function (lang1, lang2) {
  console.log(`Logged ${this.getFullName()}`);
};

var logPersonName = logName.bind(person);
logPersonName();

// It is also possible to do this
var logName = function (lang1, lang2) {
  console.log(`Logged ${this.getFullName()}`);
}.bind(person);

logName();

var logName = function (lang1, lang2) {
  console.log(`Logged ${this.getFullName()}`);
  console.log(`Arguments: ${lang1}, ${lang2}`);
};

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);
