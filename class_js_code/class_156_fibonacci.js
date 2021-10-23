// my trial 
function fibonacciIterative(n) {
    let numN1 = 0;
    let numN2 = 0;
    let numN3 = 0;

    for (let i = 0; i < n; i++) { //O(n)
        if (i === 0) {
            numN2 = 0;
            numN1 = 1;
        } else {
            numN3 = numN1;
            numN1 = numN1 + numN2;
            numN2 = numN3;
        }
    }

    return numN1;
}

// class better one
function fibonacciIterative_class(n) {

    let ary = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        ary.push(ary[i - 1] + ary[i - 2]);
    }
    return ary[n];
}

// O(2^n)
var times = 0;
function fibonacciRecursive(n) {
  times++  
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciIterative(20));
console.log(fibonacciIterative_class(20));

console.log(fibonacciRecursive(20));
// check the time, so fucking large
// DO many replicate thing
console.log(times)