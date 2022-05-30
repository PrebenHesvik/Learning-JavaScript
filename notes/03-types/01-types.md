#### Dynamic typing
- You don't tell the engine what type of data a variable holds, it figures it out while your code is running. 
- Variables can hold different types of values because it's all figured out during execution. 

#### Javascript primitives:
- A primitive type is a type of data that represents a single value.
- Primitive types:
  - undefined (represents lack of existence, but don't set a variable to this)
  - null (also represents lack of existence and variables can be set equal to null)
  - string
  - number (always a floating point number)
  - boolean (true or false)
  - symbol (new in ES6)



#### Operators (+, -, <, >, etc)
- A special function that is syntactically (written) differently
- Generaly, operators take two parameters and return one result
- Unary Operator:
  ```js
  //////////   UNARY OPERATOR  //////////
  let score = 50;
  score += 10;
  score -= 10;
  score <= 10;
  score >= 10;

  // incrase by one
  let counter = 0;
  counter++;

  // decrease by one
  counter--;
  ```
#### Operator precedence:
- Which operator function gets called first
- Functions are called in order of precedence
- [Mozilla info on operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
    ```js
    var a = 3 + 4 * 5
    // what will the answer be?
    // since * has a higher precedence than + we get
    var a = 3 + 20
    var a = 23
    ````

#### Operator associativity:
- What order operator functions get called in when functions have the same precedence: 
  - left-to-right
  - right-to-left
   ```js
    var a = 10 / 2 * 5
    // what will the answer be?
    // since / and * have the same operator precedence, we have to look at associativty
    // in this case the calculations is done left-to-right
    var a = 5 * 5
    var a = 25

    // NEW EXAMPLE
    var a = 2, b = 3, c = 4
    a = b = c
    console.log(a, b, c)
    
    "What value will be console logged?"

    "assignment has associativity of right-to-left"

    b = c // will make b equal to 4
    a = b // will make a equal to 4

    "ANSWER: all logged values will be 4"

    ````

#### Coercion
- Converting a value from one type to another
- This happens quite often i javascript because it is dynamically typed

#### Comparison operators
[Mozilla-information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
```js
let answer = 1 < 2 < 3

"The less-than operator has associativity of left-to-right so we solve for '1 < 2' first"
"1 < 2 will result in 'true' and 'true' has a value of 1 so we get"

let answer = 1 < 3

RESULT: answer = true


// EXAMPLE
let answer = 3 < 2 < 1

"'3 < 2' will result in 'false' and 'false' is coerced to a value of 0 so we get:"

let answer = 0 < 1
RESULT: answer = true


// EQUALITY
"1" == 1 // true
false == 0 // true
true == 1  // true
null == 0 // false - null is not coerced to 0 for the equality operator
null < 1 // true - null is coerced to 0 for less-than operator
"" == false // true - empty string is 'falsy'
"" == 0 // true
```

#### Existence and booleans
```js
Boolean(undefined) // false
Boolean(null) // false
Boolean("") // false

undefined  || "hello" // hello
undefined || null // null
"hi" || null // hi
"hi" || "hello" // hi

"If you use || with two values javascript will return the first one if that one is true \
or it will return the last one if that one is true. In case both values are true then it will \
return the first one and if both values are false then it will return the last one"

// Before ES6
function greet(name) {
  name = name || "Ada" // will return Ada if name is undefined
  console.log("hello " + name)
}

greet() // if no argument is given "name" will be set to undefined
```

#### Typeof and instanceof
````js
typeof "a random string"; // ==> "string"

"Ada" instanceof String  // ==> true
```


