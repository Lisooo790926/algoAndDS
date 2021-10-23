/**
 * @param {number[]} nums
 * @return {number}
 */
// greate solution from leetcode
var rob_leetcode = function (nums) {
  var rob1 = 0;
  var rob2 = 0;
  let temp = 0;

  // [rob1, rob2, n, n+1, ...]
  // make every element as end point
  // the max value of each new n point will
  // have max ( itself + last maxValue(n-2) which is rob1 , rob2 (because of no adjacent) )
  // then move one by one
  for (num of nums) {
    temp = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  // after move every element
  // return rob2, becasue this result will be the result which consider final element!
  return rob2;
};

// greate solution from leetcode
var cache;
var currentIndex;
var calculate = 0;
var rob_leetcode_recursive = function (nums) {
  cache = {};
  currentIndex = 0;
  return inner_rob_recursive(nums, currentIndex);
};

// start from zero 
function inner_rob_recursive(nums, currentIndex) {
  calculate++;
  if (currentIndex > nums.length - 1) {
    return 0;
  }

  if (cache[currentIndex]) {
    return cache[currentIndex];
  }

  // use index for cache key
  // need to cache n+2 and n+1 also
  cache[currentIndex + 2] = cache[currentIndex + 2] !== undefined ? cache[currentIndex + 2] : inner_rob_recursive(nums, currentIndex + 2);
  cache[currentIndex + 1] = cache[currentIndex + 1] !== undefined ? cache[currentIndex + 1] : inner_rob_recursive(nums, currentIndex + 1);
  cache[currentIndex] = Math.max(nums[currentIndex] + cache[currentIndex + 2], cache[currentIndex + 1]);

  return cache[currentIndex];
};

var mem = {};
function rob (nums) {
  const len = nums.length
  if(len <= 0) {
    return 0;
  } else if (len == 1) {
    return nums[0]
  }

  if(!(len in mem)) {
    mem[len] = Math.max(rob(nums.slice(0, len-1)), rob(nums.slice(0, len-2)) + nums[len-1])
  }
  return mem[len]; 
}


var nums = [0, 0, 0, 0, 0, 1];

console.log(rob_leetcode(nums));
console.log(rob_leetcode_recursive(nums));
console.log(rob(nums));
console.log(calculate);
console.log(cache);
