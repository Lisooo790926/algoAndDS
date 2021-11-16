/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {

    const len = arr.length;

    for (let i = 1; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return i;
        }
    }

    return -1

};

// binary search method
var peakIndexInMountainArray2 = function (arr) {

    let top = -1;
    let lo = 0;
    let hi = arr.length - 1;

    // if mid > mid + 1, hi = mid
    // if mid < mid + 1, lo = mid +1

    while (hi > lo) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] > arr[mid + 1]) { // this could be simplifier into else 
            hi = mid;
            top = hi;
        } else if (arr[mid] < arr[mid + 1]) {
            lo = mid + 1;
            top = lo;
        }
    }

    return top; 
};