// ========== CONSTRUCTING AN OBJECT VIA A FUNCTION ==========
// ========== FACTORY FUNCTION ==========
function Person(firstName, lastName) {
  // will use more memory than needed because we get
  // the getFullName function inside every object created.
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

var ada = new Person("Ada", "Lovelace");

// CONSTRUCTOR FUNCTION
//  A normal function that is used to construct objects
//  We start the function name with a capital letter
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
// **WILL NOT WORK WITH AN ARROW FUNCTION BECAUSE ARROW FUNCTIONS ARE LEXICALLY SCOPED**
// The reason why we don't add this method inside the function is that then
//  this function would be created for every new object we create instead of
//  it only being created once but allowed to be used in every object.
// This saves a lot of memory space

// The new keyword creates at first an empty object, and then it invokes the function.
// The this-keyword in the function will then point to the new object created.
// as long as the function does not return anything, the javascript engine will return
//  the object
var ada = new Person("Ada", "Lovelace");

// output
console.log(ada);
console.log(ada.getFullName());

// **REMBEMBER**
// In a function within an object method, 'this' refers to the window/global scope
// We can work around this in two ways:
Person.prototype.getFullName2 = function () {
  const self = this;
  function fullName() {
    return `${self.firstName} ${self.lastName}`;
  }
  return fullName();
};

Person.prototype.getFullName3 = function () {
  function fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  return fullName.bind(this);
};

// ========== ADDING A METHOD TO THE STRING OBJECT ==========
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("Ada".isLengthGreaterThan(4));

// ===================================================================
//  In general we should not use the builtin function constructors,
//  as they are not primitives and can have some weird behavior.
//  We should use literals instead
// ===================================================================

// ========== PROTOTYPAL INHERITANCE ==========
// EXAMPLE 1:
var person = {
  firstName: "Default",
  lastName: "Default",
  greet: function () {
    return `Hi ${this.firstName}`;
  },
};

var ada = Object.create(person);
ada.firstName = "Ada";
ada.lastName = "Lovelace";

// EXAMPLE 2:
// This method is not commonly used. ***DON'T USE IT***
const personFunctions = {
  greet() {
    return `Hi ${this.firstName}`;
  },
};

function createPerson(firstName, lastName) {
  let newPerson = Object.create(personFunctions);
  newPerson.firstName = firstName;
  newPerson.lastName = lastName;
  return newPerson;
}

const person = createPerson("Ada", "Lovelace");

// ========== POLYFILL ==========
// Code that adds a feature which the engine may lack

// ========== CLASSES ==========
// Synthactic sugar - prototypal inheritance happening behind the scenes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ========== CLASSES - INHERITANCE ==========
class Student extends Person {
  constructor(firstName, lastName, major) {
    super(firstName, lastName);
    this.major = major;
  }
  study() {
    return `${this.firstName} studies`;
  }
}

const s = Student("Theo", "H", "Computer Science");
