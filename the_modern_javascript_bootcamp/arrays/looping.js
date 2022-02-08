let array = [1, 2, 3, 4, 5];

// use forEach loop over each element in the array and print out each item
console.log("loop ONE running");
array.forEach(function(item) {
  console.log(item);
});

// using a for loop print out value 0 to 2
console.log("loop TWO running");
for (let count = 0; count <= 2; count++) {
  console.log(count);
}

// use for loop to loop over elements in array
console.log("loop THREE running");
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// use for loop to loop over elements in array - in reverse order
console.log("Loop FOUR running - reverse order");
for (let index = array.length - 1; index >= 0; index--) {
  const element = array[index];
  console.log(element);
}
