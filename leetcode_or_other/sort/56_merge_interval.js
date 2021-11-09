/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // sort the intervals (by first element)
    intervals.sort((a, b) => a[0] - b[0]);

    console.log(intervals)

    index = 0
    endIndex = intervals.length -1;
    for(let j=1; j<=endIndex; j++) {
        index = compare(intervals, index, j)
    }

    return intervals.filter(interval=> interval!=null);
}


function compare(intervals, i, j) {
    
    let currentMax = intervals[i][1]

    let nextMin = intervals[j][0]
    let nextMax = intervals[j][1]

    if (currentMax >= nextMin) {
        if (nextMax > currentMax) {
            intervals[i][1] = nextMax
        } 
        intervals[j] = null;
        return i; // keep current position
    } 

    return j; // move to next one if no change
}

let intervals = [[1,4],[0,4]]

console.log(merge(intervals))