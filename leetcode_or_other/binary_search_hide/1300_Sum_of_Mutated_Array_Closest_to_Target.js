/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {

    // find the max value
    let sum = 0;
    let max = Number.MIN_VALUE;
    for (let each of arr) {
        sum += each;
        max = Math.max(each, max);
    }

    if (sum == target) return max;

    let min = 0;
    let prev = 1;
    let diff = Number.MAX_VALUE;

    while (max >= min) {

        // get mid, and use this value to calculate the mutated sum
        let mid = Math.floor((max + min) / 2);
        let mutatedSum = getMutatedSum(arr, mid);

        // compare with target  
        // if mutatedSum > target min = mid -1
        // if mutatedSum < target max = mid +1
        if (mutatedSum < target) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }

        // compare the diff with prev sum, if smaller or (equals & min < prev), then change prev
        let curDiff = Math.abs(mutatedSum - target);
        if (curDiff < diff || (curDiff == diff && prev > mid)) {
            prev = mid;
            diff = curDiff;
        }
    }
    return prev;
}


function getMutatedSum(arr, mid) {
    let sum = 0;
    for (let value of arr) {
        sum += (value > mid) ? mid : value;
    }

    return sum;
}