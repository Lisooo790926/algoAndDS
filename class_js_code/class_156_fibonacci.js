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
function fibonacciRecursive() {

  // inner times calculation
  var times = 0;

  // create private method
  function _calculate(n) {
    times++  
    if (n < 2) {
      return n;
    }
    return _calculate(n - 2) + _calculate(n - 1);
  }

  // create the closure!
  return {
    calculate : (n) => {
        return _calculate(n);
    },
    
    displayTimes: () => {
      console.log('time is ', times);
    },
  };
}

// bottom up 
function fibonacci_class_2(n){
    let answer = [0, 1]
    for (let i=2 ;i<=n; i++) {
        answer.push(answer[i-2], answer[i-1])
    }
    return answer.pop();
}

console.log(fibonacciIterative(20));
console.log(fibonacciIterative_class(20));

var fibonacciRecursive = fibonacciRecursive();
console.log(fibonacciRecursive.calculate(20));
fibonacciRecursive.displayTimes()

console.log(fibonacci_class_2(20))