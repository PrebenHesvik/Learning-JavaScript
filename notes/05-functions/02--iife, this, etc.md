


#### IIFE
```js

// The parentheses in front makes this a function expression
(function() {
  // variables inside this function is only available locally
})();

// Example
var fn = (function() {
    function a() {
        return 10
    }
    return {a: a}
})()

console.log(fn.a()) // --> 10

```

#### this
- **`this`** is the object that the function is a property of
- `this` is not lexically scoped
- Tip: look at what is to the next of the function/method (e.g obj.sing())
- What `this` refers to has more to do with `from where` it is called than where it is written. 
- main benefits of `this` keyword:
  - gives method access to their object
    ```js
    const obj = {
        name: 'Ada',
        sing() {
            return `${this.name} is singing`
        },
        singAgain(){
            return `${this.sing()} again`
        }
    }

    let action = obj.singAgain()
    console.log(action);
    ```
  - allows us to execute the same code for multiple objects
    ```js
    function sing() {
            return `${this.name} is singing`
        },

    const obj1 = {
        name: 'Ada',
        sing:sing() 
    }

    const obj2 = {
        name: 'Theo',
        sing:sing() 
    }
    ```

```js
const obj = {
  name: 'Ada',
  sing() {
    console.log('a: ', this)
    var anotherFunc = function() {
        console.log('b: ', this);
    }
    anotherFunc()
  }
}
obj.sing()

// In this example "this" inside anotherFunc will actually
// refer to global/window because 

// BUT WE CAN SOLVE THIS BY USING AN ARROW FUNCTION, 
// because arrow functions are always lexically scoped
const obj = {
  name: 'Ada',
  sing() {
    console.log('a: ', this)
    var anotherFunc = () => {
        console.log('b: ', this);
    }
    anotherFunc()
  }
}
obj.sing()

// ANOTHER WORKAROUND IS THIS:
const obj = {
  name: 'Ada',
  sing() {
    console.log('a: ', this)
    var anotherFunc = function() {
        console.log('b: ', this);
    }
    return anotherFunc().bind(this)
  }
}
// notice that we call the function again
obj.sing()()

// YET ANOTHER WORKAROUND
// ANOTHER WORKAROUND IS THIS:
const obj = {
  name: 'Ada',
  sing() {
    console.log('a: ', this)
    var self = this
    var anotherFunc = function() {
        // now self refers to the object
        console.log('b: ', self);
    }
    return anotherFunc()
  }
}
// notice that we call the function again
obj.sing()()
```