/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // binary search !!

    const len = nums.length;
    if(len == 1) {
        return target > nums[0] ? 1 : 0;
    } else if(!len || len <= 0) {
        return 0;
    }

    // find the half index, and find the number
    const halfIndex = Math.floor(len/2) 
    let currentNum = nums[halfIndex];
    
    // compare is larger or smaller
    // larger then do it in right array
    // smaller then do it in left array
    if(target == currentNum) {
        return halfIndex;
    } else if(target > currentNum) {
        if(nums[halfIndex+1] > target) {
            return halfIndex+1;
        }
        return halfIndex+1 + searchInsert(nums.slice(halfIndex+1), target)
    } else if(target < currentNum) {
        if(nums[halfIndex-1] < target) {
            return halfIndex;
        }
        return searchInsert(nums.slice(0, halfIndex), target)
    }
};

var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};


let nums = [1,3,5,6, 8]
let target = 5

console.log(searchInsert(nums, target))
