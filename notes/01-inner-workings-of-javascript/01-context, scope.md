#### Syntax parser
 -  A program that reads your code and determines what it does and if its grammar is valid. 
 -  Translates your code into something the computer can understand (compiler). 

#### Dynamic scope
- The environment where a function is being invoked

#### Leixcal environment/scope
  - The environment where you are currently writing something, e.g a function
  - Where something sits physically in the code you write and what surrounds it. 
    - Is that variable written inside a function or is it written in the global environment?

<br>
What will be console logged inside function b??

```js
function b() {
    console.log(myVar);
}

function b() {
    var myVar = 2
    b()
}

var myVar = 1
a()

ANSWER: 1
REASON: "Function b is written inside the global execution environment."
```

#### Execution context
  - When Javascript code is executed, an execution environment is created.
  - Tells us which lexical environment is currently running
  - A wrapper to help manage the code that is running
    - There are lots of lexical environments. Which one is currently running is managed via exexcution contexts. It can contain things beyond what you've written in your code. 
  - A this-keyword is created in every execution context
  - A link to the outer environment is also created

#### Global execution context (Base execution context)
- This is the outermost environment
- Contains:
  - Global Object (window)
    - functions/variables written in the global execution context is available inside the global object.
  - this keyword
  -  hoisted variables and functions

#### Scope
- What variables we have access to in a given execution environment
- Global scope
  - module scope
    - function scope
      - block scope - `const` and `let`

#### Scope chain
  - Each execution environment contains references to its outer environment. If for example a variable is referenced inside a function but has not been declared within the same function, javascript will look for that variable in the outer environment(s). 
  
<br>

  ```In javascript our **lexical scope** (available data + variables where the function was defined) determines our available variables. Not where the function is called (**dynamic scope**)```

#### Variable environment
  - Where variables live and how they relate to each other in memory

#### Hoisting
  - Allocating space in memory to functions and variables
```js

// function - will get hoisted
function func() {
    console.log('Function - will get hoisted)
}

// function expression - will get hoisted as func2 = undefined
var func2 = function() {
    console.log('function expression')
}

// function expression using 'const' - will not get hoisted
const func3 = function() {
    console.log('function expression')
}

// function expression using 'let' - will not get hoisted
let func4 = function() {
    console.log('function expression')
}

var name = 'Theo'  // will get hoisted as name = undefined
let car = 'Tesla' // will not get hoisted
const model = 'Model 3' // will not get hoisted 
```

#### Function scope
  - inside a function

#### Block scope
  - inside an if statement, for loops

#### Variable scope
  - `let` and `const`
    - if assigned inside a func then only avaiable inside the func
      ```js
      let name = 'Theo' 
      let name = 'Ada'
      // results in: SyntaxError: Identifier 'age' has already been declared
      ```
    - if assigned in a block of code (loop, if statement) then only
      available inside that block (block scoped)
      ```js
      if(true) {
      let num = 5
      }
      console.log(num)
      // results in: ReferenceError: num is not defined
      ```

  - `var`
    - can br re-declared
    - if assigned inside a func then only avaiable inside the func
    - available outiside the block scope (not block scoped)
    - variables assigned using var can be reassigned again using var
  
      ```js
      var name = 'Theo' 
      var name = 'Ada'
      ```
    - var is also hoisted (look at hoisting in javascript) 
      able to reference a function that has been declared later
      in the script without getting an error
      ```js
      var fn = fnA(5, 10)
      console.log(fn);

      function fnA(a, b) {
            return a, b
      }
      ```

#### Javascript is single threaded
  -  One command at a time

#### Synchronous
  - One at a time AND in order

#### Event Queue
  - The javascript engine is periodically looking for tasks within the event queue when the stack is empty. 
