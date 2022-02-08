let fahrenheit = 32;

// calculate celcius and store in celsus variable
// print that value
function converter(scale, degrees) {
  if (scale === "celsius") {
    temp = (degrees - 32) * (5 / 9);
  } else if (scale === "kalvin") {
    temp = (degrees + 459.67) * (5 / 9);
  } else {
    temp = "Not working";
  }
  console.log("The temperature in", scale, "is", temp, "degrees");
}

converter((scale = "celsius"), (degrees = 50));
