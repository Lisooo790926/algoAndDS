/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // get max , because of digital
  // loop to compare each residue

  let maxValue = Math.max(x, y);
  let minValue = maxValue == x ? y : x;

  let result = [];
  let currentIndex = 0;
  while (maxValue > 0) {
    if (minValue % 2 != maxValue % 2) {
      result.push(currentIndex);
    }
    currentIndex++
    maxValue = Math.floor(maxValue / 2);
    minValue = Math.floor(minValue / 2);
  }

  return result.length;
};

console.log(hammingDistance(1, 4));


/*
public class Solution {
    public int hammingDistance(int x, int y) {
        return Integer.bitCount(x ^ y);
    }
}

java use XOR to fix this issue quickly
*/
