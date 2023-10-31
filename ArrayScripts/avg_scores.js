let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

// Function to calculate the average score for an array of scores
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

const myAverage = getAverage(myScores);
const yourAverage = getAverage(yourScores);

console.log("My average score: " + myAverage);
console.log("Your average score: " + yourAverage);
