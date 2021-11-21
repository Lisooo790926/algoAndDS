/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    
    // always analysis first
    // [1, 7] [10, 20] [23, 60]
    // 1, 10, 23
    
    // 1, 10 
    
    // if (mid <= target) lo = mid
    // if (mid > target) hi = mid - 1
    
    let lo = 0;
    let hi = matrix.length - 1;
    
    while (hi > lo) {
        let mid = Math.floor((lo+hi)/2) + 1;
        if(matrix[mid][0] > target) {
            hi = mid - 1
        } else {
            lo = mid;
        }        
    }
    let nums = matrix[lo];
    
    lo = 0;
    hi = nums.length - 1;
    
    while (hi >= lo) {
        let mid = Math.floor((hi+lo)/2);
        if(nums[mid] > target) {
            hi = mid - 1;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            return true
        }
    }
    
    return false;
    
};