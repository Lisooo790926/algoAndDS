/**
 * @param {number[]} nums
 * @return {number}
 */

// time O(n) && space O(1)
var maxSubArray = function (nums) {

    if (!nums) return null

    let tempSum = nums[0];
    let maxVal = nums[0];

    for (let i = 1; i < nums.length; i++) {

        // check the next value is new starting point 
        // cause if the nums[i] is larger then sum of old values + nums[i]
        // we don't need to concern the old values
        tempSum = Math.max(tempSum + nums[i], nums[i])

        // check current tempSum is larger than max value
        maxVal = Math.max(tempSum, maxVal)
    }

    return maxVal;
};

// refer to https://leetcode.com/problems/maximum-subarray/discuss/20211/Accepted-O(n)-solution-in-java
// so great, only when Sum(nums[i]) + nums[i+1] < nums[i+1] then move the ending

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))