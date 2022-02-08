let gradeCalculator = function(points, totalPoints) {
  let pct = (points / totalPoints) * 100;
  let grade;

  if (pct > 89) {
    grade = "A";
  } else if (pct > 79) {
    grade = "B";
  } else if (pct > 69) {
    grade = "C";
  } else if (pct > 59) {
    grade = "D";
  } else {
    grade = "F";
  }

  return `${points}/${totalPoints} --> You got a ${grade} (${pct}%)!`;
};

let grade = gradeCalculator(92, 100);
console.log(grade);
