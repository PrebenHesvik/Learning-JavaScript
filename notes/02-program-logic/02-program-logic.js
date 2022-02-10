//////////   EQUALITY OPERATORS   //////////
// > (greater than)
// < (less than)
// >= (greather than or equal)
// <= (less than or equal)
// == (equality)
// checks for equality of any value, but not equality of type
// it coerces both values to the same type and then compares them
// this can lead to some unexpected results
7 == '7' // --> true
0 == '' // --> true
0 == false // --> true
null == undefined // --> true
// != (not equal)
// === (strict equality)
// checks for equality of value and type
5 === 5 // --> true
10 === '10' // --> false
0 === false // --> false
// !== (strict non-equality)


//////////   TRUTHY AND FALSY VALUES   //////////
// Falsy values
//    false
//    0
//    '' (empty string)
//    null
//    undefined
//    NaN
// Truthy values
//    Everything else

//////////   LOGICAL OPERATORS   //////////
// && (and)
// || (or)
// ! (not)


//////////   OPERATOR PRECEDENCE   //////////
// ! takes precedence over && which takes precedence over ||
let x = 7
x === 7 || x === 3 && x > 10
// can be written like this
x == 7 || (x === 3 && x > 10) // --> true
  // if we want to evaluate the statement from left to right
  (x === 7 || x === 3) && x > 10 // --> false


//////////   TERNARY OPERATOR   //////////
// Syntax: condition ? expIfTrue: ExpIfFalse
let status_ = 'offline'
let color = status_ === 'offline' ? 'red' : 'green'
let msg = `since status is ${status_}, color is ${color}`
console.log(msg);


//////////   IF STATEMENT   //////////
let rating = 5
if (rating === 3) {
  console.log('You are above exppectations')
}
else if (rating == 2) {
  console.log('You meet expectations')
}
else {
  console.log('else clause triggered')
}


//////////   NESTED IF STATEMENT   //////////
let password = 'cat dog'

if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    // -1 will be returned if indexOf method can't find the item it looks for
    console.log('Password cannot include spaces')
  }
  else {
    console.log('Valid password')
  }
}
else {
  console.log('Password is too short')
}


//////////   SWITCH STATEMENT    //////////
// 
day = 3

switch (day) {
  case 1:
    console.log('Monday')
    break
  case 2:
    console.log('Tuesday')
    break
  case 3:
    console.log('Wednesday')
    break
  case 4:
    console.log('Thursday')
    break
  case 5:
    console.log('Friday')
    break
  case 6:
    console.log('Saturday')
    break
  case 7:
    console.log('Sunday')
  default:
    console.log('Invalid day selected');
}

let emoji = 'happy face'
switch (emoji) {
  // return yellow for both 'sad face' and 'happy face'
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break
  case 'eggplant':
    console.log('purple');
    break
  case 'heart':
  case 'lips':
    console.log('yellow');
    break
}

let keyword = 'HOF'

switch (keyword) {
  case 'HVG':
    console.log('Hjørungavåg')
    break
  case 'HOF':
    console.log('Hønefoss')
    break
  default:
    console.log('Skurve');
}