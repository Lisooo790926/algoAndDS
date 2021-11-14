/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// god solution 1 
var searchRange1 = function (nums, target) {

    let lo = 0;
    let hi = nums.length - 1;

    // use two BS to achieve to find startpoint , endpoint
    // if (nums[mid] > target)  hi = mid - 1 
    // if (nums[mid] < target)  lo = mid + 1 
    // startpoint : if (nums[mid] == target) hi = mid
    // endpoint   : if (nums[mid] == target) lo = mid

    let result = [-1, -1];

    while (hi > lo) {
        let mid = Math.floor((lo + hi) / 2);
        if (nums[mid] >= target) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    if (nums[lo] != target) {
        return result;
    } else {
        result[0] = lo;
    }

    hi = nums.length - 1;

    while (hi > lo) {
        let mid = Math.floor((lo + hi) / 2) + 1;
        if (nums[mid] <= target) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }

    result[1] = lo;

    return result;
}


// god solution 2 
var searchRange2 = function (nums, target) {
    
    // if this is integer array 
    let rTarget = target + 0.5;
    let lTarget = target - 0.5;

    let hi = binarySearch(nums, rTarget); 
    let lo = binarySearch(nums, lTarget);

    if(lo == hi) return [-1, -1] 
    else return [lo, hi-1]
}

function binarySearch(nums, target) {

    let lo = 0;
    let hi = nums.length - 1;

    // if(nums[mid] > target) hi = mid - 1;
    // if(nums[mid] < target) lo = mid + 1;

    // there are three cases (target = 8)
    //     7  8  9        7  9  9        8  8  8
    //8.5  x     x        x     x        x     x
    //           xx       xx                   xx    
    //        xh xl       xh xl                xh xl       
    //7.5  a     a        a     a        a     a      
    //     aa             aa             aa          
    //     ah al          ah al       ah al               
                                         
    while(hi >= lo) {
        let mid = Math.floor((lo+hi)/2);
        if(nums[mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return lo;
}


// my trial 
var searchRange = function (nums, target) {

    let result = [-1, -1];
    let lo = 0;
    let hi = nums.length - 1;

    // first binary search, search for header
    while (hi > lo) {
        let mid = Math.floor((hi + lo) / 2);
        if (nums[mid] == target) {
            if (nums[mid - 1] == target) {
                hi = mid - 1;
            } else {
                lo = mid;
                break;
            }
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    if (nums[lo] == target) {
        result[0] = lo;
    }

    hi = nums.length - 1;

    //second binary search, search for tail
    while (hi > lo) {
        let mid = Math.floor((hi + lo) / 2);
        if (nums[mid] == target) {
            if (nums[mid + 1] == target) {
                lo = mid + 1;
            } else {
                lo = mid;
                break;
            }
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    if (nums[lo] == target) {
        result[1] = lo;
    }

    return result

};