var mySqrt = function (x) {
    // while loop to check if next point is larger
    // if so, return the last value

    let result = 0;
    let root = 1;

    while (root * root <= x) {
        result = root;
        root++;
    }

    return result;
};

var mySqrt_binary_search = function (x) {

    let hi = x;
    let lo = 0;

    // if (mid > x) hi = mid - 1
    // if (mid < x) lo = mid + 1
    // if (mid = x) hi = mid

    while (hi >= lo) {
        let mid = Math.floor((hi + lo) / 2);
        let squre = mid * mid;
        if (squre < x) {
            lo = mid + 1
        } else if (squre > x) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }

    return hi;
};