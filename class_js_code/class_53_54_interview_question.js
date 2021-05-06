// 給兩個array, 其一common array
// 其二是 checking array, 確認此checking array中有無common value 
// example: 
// const array1 = ['a','b','c','d']
// const array2 = ['x', 'y','z']
// return false
// example 2 : 
const array1 = ['a','b','c','d']
const array2 = ['x','y','a']
// return true

// first solution brutal force (DO NOT write the code)

// O(n^2) time complexity
// O(1) space complexity
function containCommonValue (input, commonAry) {
    for (let value of array1) {
        for (let value2 of array2) {
            if(value === value2) 
                return true;
        }
    }
};

// second solution 
// javaScript hashTable is Object
// array1 ==> obj {'a':true, 'b':true, 'c':true}
// array2[index] === obj.properties

// O(n + m) time complexity is better
// O(n) space complexity is more heavy

function containCommonValueSec(checkedAry, commonAry) {
    // create the object for first array where the properties === items
    // think the possible boundry condition and basic solution
    // can we assume always 2 params
    // in the end, how to improve current solution
    // remember modular the code
    let checkMap = {};
    for(let i=0;i<commonAry.length;i++) {
        const item = array1[i];
        if(!checkMap[item]) {
            checkMap[item] = true; 
        };
    }
    // loop through second array to check value existed in first array
    for (let j=0;j<checkedAry.length;j++) {
        if(checkMap[checkedAry[j]]) return true;
        else return false
    }

    // 這方法連array內放array也可以, 因為是javaScript會自動轉換成String
}


// Be more clean in solution second (base on how you understand the code)
function containCommonValueSec_improve(checkedAry, commonAry) {
    return checkedAry.some(item => commonAry.includes(item))
}

console.log(containCommonValueSec_improve(array1, array2))

