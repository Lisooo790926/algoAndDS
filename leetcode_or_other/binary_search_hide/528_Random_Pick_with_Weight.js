// my trial ! 

/**
 * @param {number[]} w
 */
var Solution = function (w) {

    for (let i = 1; i < w.length; i++) {
        w[i] = w[i] + w[i - 1]
    }

    this.w = w;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {

    let end = this.w.length - 1;
    let target = Math.floor(Math.random() * this.w[end]);

    let lo = 0;
    let hi = end;

    while (hi > lo) {

        let mid = Math.floor((lo + hi) / 2);
        if (this.w[mid] <= target) { // if the same, should go next value
            lo = mid + 1
        } else {
            hi = mid;
        }
    }

    return hi

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

