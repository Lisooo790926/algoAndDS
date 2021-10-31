/**
 * @param {number} n
 * @return {number}
 */

// recursive solution
 var getMoneyAmount = function(n) {
    let mem = [...Array(n+1)].map(e=>Array(n+1).fill(0))
    return getMax(1, n, mem)
};

function getMax(start, end, mem) {

    if(end <= start) { // mem[i][i] = 0 because the answer will be only one
        return 0 
    } 

    // dp array, make n^3 to n^2
    if(mem[start][end] != 0) {
        return mem[start][end]
    }

    mem[start][end] = Number.MAX_VALUE;
    for(let k=start; k<end; k++) {
        // pick each k to calculate current min 
        mem[start][end] = Math.min(mem[start][end], Math.max(getMax(start, k-1, mem), getMax(k+1, end, mem)) + k);      
    }

    return mem[start][end];
}

// xk = Max(f(1, k-1), f(k+1, n)) + k
// result = min({x1...xk...xn})

// loop + memo solution
var getMoneyAmount_loop = function(n) {
    let mem = [...Array(n+1)].map(e=>Array(n+1).fill(0))
    
    // prepare all mem array
    for (let j=2; j<= n; j++) { // skip mem[i][i] in loop, above already made mem[i][i] = 0 
        for(let i=j-1; i>0; i--) { // from large to small, because need to fill the mem first
            let currentMin = Number.MAX_VALUE
            for(k=i+1;k<j;k++) { // not include i and j !!!  
                                 // ex : need to get (1,4), 
                                 // need to have min(  k=2  Max((1,1) (3,4)) + 2 and  k=3  Max((1,2), (4,4)) + 3)
                                 // no k=1, and  k=4, we don't need edge value
                let localMax = Math.max(mem[i][k-1], mem[k+1][j]) + k
                currentMin = Math.min(mem[i][j], localMax);
            }
            // handle adjancet element!!! i+1 = j 
            mem[i][j] = i+1 == j ? i : currentMin // when mem[i][i+1], mean f(i, i+1), check i ~ i+1, 
                                                  // this result should be i  
                                                  // because check i, if the answer is i+1, next can select, 
                                                  // if answer is i, then you correct
                                                  // only need the money for i 
        }
    }
    console.log(mem);
    return mem[1][n];
};


console.log(getMoneyAmount_loop(10))