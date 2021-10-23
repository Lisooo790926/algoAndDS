// change to implement the cache system for fibnacci
var times = 0;
function fibonacciRecursive_origin(n) {
  // times++;
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive_origin(n - 1) + fibonacciRecursive_origin(n - 2);
}

// my trial
// top down
var cache = {};
function fibonacciRecursive(n) {
  // inner times calculation
  times++;
  if (n < 2) {
    cache[n] = n;
  }

  if (!(n in cache)) {
    cache[n] = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
  }

  return cache[n];
}

console.log(fibonacciRecursive_origin(20));
console.log(times); // 21895

console.log(fibonacciRecursive(20));
console.log(times); // 39 

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
