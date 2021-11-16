var searchTarget = function (nums, target) {

    let lo = 0;
    let hi = nums.length - 1;

    while (hi > lo) {
        let mid = Math.floor((hi + lo) / 2);
        if (nums[mid] > nums[hi]) { // could not use ！！！lo！！！
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    let smallest = lo;

    let lo = 0;
    let hi = nums.length - 1;
    while (hi >= lo) {
        let mid = Math.floor((hi + lo) / 2);
        let realMid = (mid + rot) % 7  // adjust the index
        if (nums[realMid] > target) hi = mid - 1
        else if (nums[realMid] < target) lo = mid + 1
        else return realMid
    }

    return -1
}