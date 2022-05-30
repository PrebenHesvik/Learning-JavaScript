// =============== THE VALUE OF THIS - RULES ===============
// 1. Did you define the function with an arrow function?
//    Write console.log(this) on the first valid line above the
//    arrow function. Value of 'this' in the arrow function will
//    be equal to that console log.

// 2. Did you call 'bind', 'call', 'apply' on the function when
//    you invoked it?
//    'this' is equal to the first argument of 'bind', 'call',
//    'apply'.

// 3. All other cases
//    'this' is equal to whatever is to the left of the '.' in
//    the method call.

// =============== NEW BINDING 'THIS' ===============
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const ada = new Person('Ada', 35);

// =============== IMPLICIT BINDING ===============
const car = {
  make: 'Tesla',
  model: 'Model 3',
  drive() {
    console.log(`${this.make} ${this.model} drives`);
  },
};

// =============== EXPLICIT BINDING ===============
globalObj = 'universe';

const student = {
  name: 'Ada',
  major: 'Mathematics',
  something: function () {
    console.log('good morning' + ' ' + this.globalObj);
  }.bind(globalThis),
};

student.something();

// New example
const student2 = {
  name: 'Ada',
  major: 'Mathematics',
  callHi: function () {
    function sayHi() {
      console.log('hi' + ' ' + this.name);
    }
    sayHi.call(this);
  },
};

student2.callHi();
// =============== ARROW FUNCTION ===============
const person2 = {
  name: 'Karen',
  age: 44,
  hi: function () {
    var inner = () => {
      console.log(`Hi ${this.name}`);
      // If we had used a regular function, then 'this'
      // would refer to the window instead of to the object.
    };
  },
};
