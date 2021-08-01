// find the factorial of any number

// my trial
function findFactorialRecursive(number) {
    if (number < 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {

    if (number < 1) {
        return 'failed'
    }

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))


