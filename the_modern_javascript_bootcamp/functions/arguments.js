// Multiple arguments
let add = function(a, b) {
  return a + b;
};

let result = add(10, 15);
console.log(result);

// default arguments
let GetScoreText = function(name, score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = GetScoreText("Preben");
console.log(scoreText);

let tip_amt = function(total, tipPercent = 0.15) {
  let tip = total * tipPercent;
  return `Based on a total bill of ${total} and ${tipPercent} in tip your tip will be ${tip}.`;
};

let tip = tip_amt(100);
console.log(tip);
