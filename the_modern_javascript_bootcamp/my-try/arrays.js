let array = ["Preben", "Mads", "Brede"];

let new_array = [];
array.forEach(function(element) {
  const reverse = element
    .split("")
    .reverse()
    .join("");
  new_array.push(reverse);
});

console.log(new_array);
