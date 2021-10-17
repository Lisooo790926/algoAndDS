/**
 * @param {number[]} nums
 * @return {number}
 */

// my trial -> failure
var calculate = 0;
var cache = {};
var rob = function (nums) {
  calculate++;
  // console.log(nums)

  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  } else if (nums.length == 1) {
    return nums[0];
  }

  var rob1 = getValueFromCache(nums, 1);
  var rob2 = getValueFromCache(nums, 2);

  console.log("rob1:", rob1, "rob2", rob2);
  return Math.max(rob1, nums[0] + rob2);
};

// but this solution will base on this hash function
// because if collision happen, it will affect result!! 
function getHashFromAry(array) {
  const numbuckets = 97;
  let bucket = array.length % numbuckets;
  array.map((num) => bucket = (bucket + num) % numbuckets);
  return bucket;
}

function getValueFromCache(nums, sliceIndex) {
  const subAry = nums.slice(sliceIndex);
  const hashkey = getHashFromAry(subAry);

  var robValue = cache[hashkey];
  if (!robValue) {
    robValue = rob(nums.slice(sliceIndex));
    cache[hashkey] = robValue;
  }
  return robValue;
}


// greate solution from leetcode
var rob_leetcode = function (nums) {
    
    var rob1 = 0;
    var rob2 = 0;
    let temp = 0;

    // [rob1, rob2, n, n+1]
    for(num of nums) {
        temp = Math.max(num + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};

// greate solution from leetcode
var rob_leetcode_recursive = function (nums) {
    
    var rob1 = 0;
    var rob2 = 0;

    // [rob1, rob2, n, n+1]
    for(num of nums) {
        temp = Math.max(num + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};


var nums = [
  114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58,
  170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69,
  129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
];
var nums = [2, 3, 2];

console.log(rob_leetcode(nums));
console.log(cache);
