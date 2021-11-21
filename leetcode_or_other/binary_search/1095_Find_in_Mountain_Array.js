/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
 var findInMountainArray = function(target, mountainArr) {
    
    const len = mountainArr.length();
    
    let lo = 0;
    let hi = len - 1;
    
    while (hi > lo) {
        let mid = Math.floor((hi+lo)/2);
        let value = mountainArr.get(mid);
        let next = mountainArr.get(mid + 1);
        if(value < next) {
            top = mid + 1;
            lo = top;
        } else {
            hi = mid;
            top = hi;
        }
    }
    
    lo = 0;
    hi = top;
    
    while (hi >= lo) {
        let mid = Math.floor((hi+lo)/2);
        let value = mountainArr.get(mid);
        if(value > target) {
            hi = mid - 1;
        } else if(value < target) {
            lo = mid + 1;
        } else {
            return mid
        }
    }
    
    lo = top + 1;
    hi = len - 1;
    
    while(hi >= lo) {
        let mid = Math.floor((hi+lo)/2);
        let value = mountainArr.get(mid);
        
        if(value > target) {
            lo = mid + 1;
        } else if(value < target) {
            hi = mid - 1;
        } else {
            return mid
        }
    }
    
    return -1
    
};