var findPeakElement = function(nums) {
    
    // we need to find any of peek

    // if (mid > mid + 1) hi = mid;
    // if (mid < mid + 1) lo = mid + 1;
    
    let lo = 0;
    let hi = nums.length - 1;
    
    while(hi > lo){
        let mid = Math.floor((hi+lo)/2);
        if(nums[mid] < nums[mid+1]) {
            lo = mid + 1;
        } else {
            hi = mid
        }
    }
   
    return lo;
};