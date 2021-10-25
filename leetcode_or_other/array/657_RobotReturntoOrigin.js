/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  // if count right == count left
  // if count down == count up

  let stepMap = { U: 0, D: 0, R: 0, L: 0 };

  for (move of moves) {
    stepMap[move]++;
  }

  return (stepMap["U"] == stepMap["D"]) && (stepMap["L"] == stepMap["R"]);
};

console.log(judgeCircle(["UD"]))
