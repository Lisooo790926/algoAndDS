/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let index = 0;
    let endIndex = nums.length - 1
    while(index <= endIndex) {
        if(nums[index] == val){
            nums[index] = nums[endIndex];
            endIndex--;
            continue;
        }
        index++;
    }

    return endIndex+1
};
