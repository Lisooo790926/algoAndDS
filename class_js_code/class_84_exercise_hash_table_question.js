// Google question
// Which one get repeat first
// Given an array = [2,5,1,2,3,5,1,2,4]

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// my trial 
// O(n) but using size, so not quite good
// if the map size is so huge, take time to search
function getFirstRepeatNum(array) {

    // use set to achieve this
    const checkedMap = new Map();
    // let originalSize = 0;
    for (let value of array) {
        // not good by using size
        // checkedMap.set(value)
        // if (checkedMap.size > originalSize) {
        //     originalSize++;
        // } else {
        //     return value
        // }

        // new version O(n)
        // search key and set the map item
        if (checkedMap.get(value)) {
            return value;
        } else {
            checkedMap.set(value, 1)
        }
    }
    return undefined;
}

console.log(getFirstRepeatNum([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(getFirstRepeatNum([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(getFirstRepeatNum([2, 3, 4, 5]))

////////////////////////////////////////////////
////////////////class solution//////////////////
////////////////////////////////////////////////

// O(n^2) not great!
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

// O(n)
function firstRecurringCharacter_2(input) {
    // use object or hashTable
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) { // only use search 
            return input[i]
        } else {
            map[input[i]] = 1 // make sure it's not zero
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter_2([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter_2([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter_2([2, 3, 4, 5]))

// what if the array is [2, 1, 1, 2, 3, 5, 1, 2, 4]
// firstRecurringCharacter answer is 2
// firstRecurringCharacter_2 answer is 1
// how to use array version to get the same answer with firstRecurringCharacter_2

// my trial
function firstRecurringCharacter_3(input) {
    
    let  minIndex = input.length + 1;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j] && minIndex > j) {
                minIndex = j
            }
        }
    }
    return minIndex < input.length + 1 ? input[minIndex] : undefined;
}

console.log(firstRecurringCharacter_3([2, 1, 1, 2, 3, 5, 1, 2, 4]))

