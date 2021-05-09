/**
 * two sum with sorted array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // check boundary
    if (!nums) return []

    // set varibale 
    let firstIndex = 0;
    let secondIndex = nums.length - 1;
    let gapVal = target - nums[firstIndex];
    let compareVal = nums[secondIndex];

    // loop the result
    // avoid crossing the element, so length - 1 
    // (like the same element use twice) 
    for (let i = 0; i < nums.length - 1; i++) {

        gapVal = target - nums[firstIndex];
        compareVal = nums[secondIndex]

        if (gapVal > compareVal) {
            firstIndex++;
        } else if (gapVal < compareVal) {
            secondIndex--;
        } else {
            return [firstIndex, secondIndex]
        }
    }

    return []
};

console.log(twoSum([2, 3, 4], 6))

// try to use the map to record the (target - number)
var twoSum_notSorted = function (nums, target) {

    let resultMap = new Map()
    for (let index = 0; index < nums.length; index++) {

        // check the keys of resultMap contain current value 
        if (resultMap.length != 0 && resultMap.has(nums[index])) {
            return [resultMap.get(nums[index]), index]
        }
        // if no put the gap value into map for next loop checking
        resultMap.set(target - nums[index], index);
    }

    return []
}


console.log(twoSum_notSorted([3, 2, 4], 6))
