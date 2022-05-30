// MATH OBJECT
// the Math object is always available to us in JavaScript and it has several useful methods
let decimalNum = 3.17;
let intNume = Math.round(decimalNum);

// PARSE INT & PARSE FLOAT
parseInt("24"); // --> 24
parseInt("24.987"); // --> 24
parseInt("24dayslater"); // --> 24

parseFloat("24.987"); // --> 24.987
parseFloat("7"); // --> 7
parseFloat("i ate 3 shrims"); // --> NaN

var a = 3;
var b = new Number(3);
console.log("a == b: ", a == b);
// === will fail because a is a primitive while
// b is an object created by a function constructor
console.log("a === b: ", a === b);
