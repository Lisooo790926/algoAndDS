/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // sort two arrays
  // compare array from first to end to check how many children will be filled

  // sorted the method
  g = g.sort((a, b) => a-b);
  s = s.sort((a, b) => a-b);

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let diff = g[result] - s[i];
    if (diff > 0) {
      continue;
    } else if (diff <= 0) {
      result++;
    }
  }
  return result;
}

let g = [10,9,8,7]
let s = [5,6,7,8]

console.log(findContentChildren(g, s));
