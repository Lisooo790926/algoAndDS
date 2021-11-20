/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {

    let isPrime = new Array(n).fill(true);
    let count = 0;

    for (let i = 2; i < n; i++) {

        if (isPrime[i]) count++;

        // the key is here, to remove all i*j in isPrime array
        for (let j = 2; i * j < n; j++) { 
            isPrime[i * j] = false;
        }
    }

    return count;
};

// god solution! 
var countPrimes2 = function (n) {

    if(n<3) return 0

    // assume all are prime (of course, we will not take care even value)
    let notPrime = new Array(n).fill(false);

    // because all even, we could remove it 
    // assume the other half value are prime
    let count = Math.floor(n/2);

    // start from 3, check i*i because if is prime, our first checking point will be i*i
    for(let i=3; i*i<n; i+=2) {

        // if not prime, we just skip it, no need to check
        if(notPrime[i]) continue;

        // start from i*i, each time add 2 * i
        // ex : 3 * 3, next 3 * 5, next 3 * 7
        // will skip the even point! 
        for(let j= i*i; j<n; j+=2*i) {
            if(!notPrime[j]) {
                count--;
                notPrime[j] = true;
            }
        }
    }

    return count;
}

