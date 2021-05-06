
// google interview example 
// [1,2,4,9] sum 8 false
// [1,2,4,4] sum 8 true

// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i=0; i<len-1; i++) {
        for (var j=i+1; j<len-1; j++) {
            if(arry[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}


// Better
function hasPairWithSum(arr, sum) {
    const mySet = new Set();
    var len = arr.length;
    for (var i=0; i<len; i++) { 
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum-arr[i]);
    }
    return false;
}