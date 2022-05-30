#### When a function is invoked, a new execution context is created
- Each function execution context has:
  - Variable environment
  - Reference to the outer lexical environment
  - this keyword
  - arguments

#### this keyword
```js

console.log(this) // ==> this refers to thewindow object 

function a() {
    console.log(this)
}
a() // ==> this refers to the window object

var b = function() {
    console.log(this)
}
b() // ==> this refers to the window object

var c = {
    name: "the c object",
    // A method of an object will have a this-keyword that refers to the object, but
    // for functions inside the method, the this-keyword will refer to the window. 
    log: function() {
        this.name = "updated c object" // ==> this changes the name-property of "c"
        console.log(this) // ==> { name: 'updated c object', log: [Function: log] }

        var setName = function(newName) {
            this.name = newName // this refers here to the window object (not sure why)
        }
        setName("Updated again!)
        console.log(this) // ==> { name: 'updated c object', log: [Function: log] }
    }
}

// We can fix the above (an older pattern)
var c = {
    name: "the c object",
    log: function() {
        var self = this
        self.name = "updated c object" // ==> self changes the name-property of "c"
        console.log(self) // ==> { name: 'updated c object', log: [Function: log] }

        var setName = function(newName) {
            self.name = newName // self refers here to the window object (not sure why)
        }
        setName("Updated again!")
        console.log(self) // ==> { name: 'updated c object', log: [Function: log] }
    }
}
```
#### Arguments
```js
function greet(greeting, name) {
    console.log(greeting, name)
    console.log(arguments) // ==> [greeting, name]
}
greet("hello", "Ada")
```

#### Spread operator
```js
function greet(greeting, name, ...other) {
    console.log(greeting, name)
    console.log(arguments) // ==> ["hello", "Ada", "english"]
}
greet("hello", "Ada", 'english')
```

#### Immediately invoked function expressions (IIFEs)
```js
var greeting = function(name) {
    console.log("hello " + name)
}("Ada") // <== notice that we invoke the function right away

// Standard IIFE
(function(name) {
    var greeting = "hello"
    console.log(greeting + " " + name)
}("Ada"))
```

#### Closures
```js
function greet(greeting) {
    return function(name) {
        console.log(greeting + " " + name)
    }
}

var sayHi = greet("Hi")

// Closure with IIFE
function buildFunctions() {
    var arr = []
    for (var i = 0, i < 3, i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j)
                }
            }(i))
        )
    }
    return arr
}

function makeGreeting(language) {
    return function(firstName, lastName) {
        if (language === "en") {
            console.log("hello " + firstName + " " + lastName);
        }
        if (language === "es") {
            console.log("hola " + firstName + " " + lastName);
        }
    }
}
```

#### Callback function
- A function you give to another function to be run when the other function is finished.


