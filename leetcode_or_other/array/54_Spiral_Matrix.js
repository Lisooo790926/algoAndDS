/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let result = [];
    let col = 0;
    let row = 0;
    let colmax = matrix[0].length;
    let rowmax = matrix.length;


    while (true) {

        // traversing top 
        for (let i = col; i < colmax; i++) result.push(matrix[row][i]);
        row++
        if (row == rowmax) break;

        // traversing right 
        for (let j = row; j < rowmax; j++) result.push(matrix[j][colmax - 1]);
        colmax--
        if (colmax == col) break;

        // traversing down
        for (let k = colmax - 1; k >= col; k--) result.push(matrix[rowmax - 1][k]);
        rowmax--
        if (row == rowmax) break;

        // traversing left
        for (let w = rowmax - 1; w >= row; w--) result.push(matrix[w][col]);
        col++
        if (colmax == col) break;

    }

    return result;
};