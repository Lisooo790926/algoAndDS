/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n, right, left) {
    
    if(!(right || left)) {
        right = 0;
        left = n;
    }
    
    
    if(left == right) {
        return left
    }
    
    let mid = Math.floor((right+left)/2);
    
    if(guess(mid) == 1) {
       return guessNumber(n, mid+1, left);
    } else {
       return guessNumber(n, right, mid);
        
    }

};