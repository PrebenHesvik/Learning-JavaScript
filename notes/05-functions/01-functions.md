#### Functions
- First class functions
  - Everything you can do with other types you can do with functions
  - (assign them to variables, pass them around, create them on the fly)
- A function is a special type of object
- We can attach things to functions such as:
  - properties (primitives, objects)
  - other functions
- A function has hidden special properties
  - name (can be anonymous)
  - code (the code inside the function is stored here)
    - invocable

#### Types of functions
- Arrow functions (lexically scoped - define 'this' based on where they are written)
- Regular function: (dynamically scoped - define 'this based on where they are invoked')

#### Function statement:
```js
// A regular function is a function statement because it does not return a value
// before the function is executed
function greet() {
    console.log("Hi)
}
```

#### Function expression
- A unit of code that results in a value (It doesn't have to save to a variable)
```js
// Example 1
5 + 4

// Example 2: if statement
// what is inside the parentheses is an expression that returns true or false
var number = 5

if (number === 5) {
    console.log("number is equal to 5")
}

// EXAMPLE 3: 
var greet = function() {
    console.log("hi")
}
```

#### By `value` or by `reference` (related to variables)
`By value` (primitive types)
```js
const a = 5 // 5 is a primitive value
const b = a

"'b' will be a copy of 'a' but sit at different location in memory, so 'a' be changed without affecting 'b'"
```

`By reference` (all objects including functions)
```js
const a = {greeting: "hi"} /
const b = a

" 'b' is NOT a copy of 'a' but just sits at the same location in memory"

// if we mutate 'a' we also change 'b'
a.greeting = "hello"
console.log(b) // result ==> {greeting: "hello"}

// This still applies when we include 'a' as a function argument
function changeGreeting(obj) {
    obj.greeting = "hello"
}

changeGreeting(a)
"this will also change the object 'b'"
console.log(b) // output --> {greeting: "hello"}

// Setting c equal to a new object
a = {greeting: "howdy"}
"'a' and 'b' are no longer equal since we assigned 'a' a new location in memory"

```
