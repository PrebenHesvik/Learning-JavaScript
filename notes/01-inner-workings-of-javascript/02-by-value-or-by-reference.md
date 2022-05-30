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