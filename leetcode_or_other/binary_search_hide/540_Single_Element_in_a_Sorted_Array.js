// my trial 
var singleNonDuplicate = function (nums) {

    // we could use the pair to verify 
    // before add single, the if even index, next will be the same
    //                           odd  index, prev will be the same
    // after add single, will be opposite

    let lo = 0;
    let hi = nums.length - 1;

    while (hi > lo) {

        let mid = Math.floor((hi + lo) / 2);
        let isEven = mid % 2 == 0;
        let curVal = nums[mid];

        let isBeforeSingle = isEven ? curVal == nums[mid + 1] : curVal == nums[mid - 1];

        if (isBeforeSingle) {
            lo = mid + 1;
        } else {
            hi = mid
        }
    }

    return nums[lo];
};


// great answer in discussion with clean code

var singleNonDuplicate2 = function (nums) {

    let lo = 0;
    let hi = nums.length - 1;

    while (hi > lo) {

        let mid = Math.floor((lo + hi) / 2);

        // only focus before add single
        if (mid % 2 == 1) mid--

        if (nums[mid] != nums[mid + 1]) hi = mid
        // skip one pair !!! 
        else lo = mid + 2
    }

    return nums[lo]
}
