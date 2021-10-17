var rob = function (nums) {
    //if nums length is 1, then need to consider nums[0]
    return Math.max(nums[0], robII(nums.slice(1)), robII(nums.splice(0, nums.length-1)))
};

// do the same solution as 198
function robII(nums) {
  var rob1 = 0;
  var rob2 = 0;
  let nMax;

  // [rob1, rob2, n, n+1, ....]
  for (num of nums) {
    nMax = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = nMax;
  }
  return rob2;
}
