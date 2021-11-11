/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    // return nums.sort((a, b)  => a-b) 

    // two pointer method

    let redIndex = 0;
    let blueIndex = nums.length - 1;

    if (blueIndex > redIndex) {
        for (let i = 0; i <=blueIndex;) {
            if (nums[i] == 0) {
                swap(nums, redIndex, i)
                redIndex++;
                i++;
            } else if (nums[i] == 2) {
                swap(nums, blueIndex, i)
                blueIndex--
            } else {
                i++
            }
        }
    }
    return nums
};

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}


let nums = [2,0,2,1,1,0]
console.log(sortColors(nums))