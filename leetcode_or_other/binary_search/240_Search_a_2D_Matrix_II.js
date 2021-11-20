/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    
    // we could use two binary search achieve
    // this one should be O(mlog n)

    // use loop to find the candidate row and binary search the target

    
    // also we could use sorted array properties to solve
    // we could start from right top corner or down left corner 
    
    // below one is O(m+n)

    if(matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    
    const row = matrix.length;
    const col = matrix[0].length;
    
    let x = col - 1;
    let y = 0;
    
    while(y < row && x >= 0) {
        
        let current = matrix[y][x];
        if (target > current) {
            y++;
        } else if(target < current) {
            x--
        } else {
           return true 
        }
    }
    
    return false;    
};