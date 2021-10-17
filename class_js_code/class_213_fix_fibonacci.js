// change to implement the cache system for fibnacci
function fibonacciRecursive_origin() {
  var times = 0;
  function _calculate(n) {
    times++;
    if (n < 2) {
      return n;
    }
    return _calculate(n - 1) + _calculate(n - 2);
  }

  return {
    calculate: (n) => {
      console.log(_calculate(n));
    },
    displayTimes: () => {
      console.log("use time is", times);
    },
  };
}

// my trial
// top down
function fibonacciRecursive() {
  // inner times calculation
  var cache = {};
  var times = 0;

  // create private method
  function _calculate(n) {
    times++;
    if (n < 2) {
      cache[n] = n;
    }

    if (!(n in cache)) {
      cache[n] = _calculate(n - 2) + _calculate(n - 1);
    }

    return cache[n];
  }

  // create the closure!
  return {
    calculate: (n) => {
      console.log(_calculate(n));
    },
    displayCache: () => {
      console.log(cache);
    },
    displayTimes: () => {
      console.log("use time is", times);
    },
  };
}

var fibonacciRecursive_origin = fibonacciRecursive_origin();
fibonacciRecursive_origin.calculate(20);
fibonacciRecursive_origin.displayTimes();

var fibonacciRecursive = fibonacciRecursive();
fibonacciRecursive.calculate(20);
// fibonacciRecursive.displayCache();
fibonacciRecursive.displayTimes();

// top down + memo 
function fibonacci_class_1(n) {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

console.log(fibonacci_class_1(20)(20));

// bottom up, start from simple solution
// O(n)
function fibonacci_class_2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(fibonacci_class_2(20));
