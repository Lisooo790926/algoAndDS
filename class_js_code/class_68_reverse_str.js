// My trial 
// time O(n/2) space O(n)
function reverse(str) {

    let result = [];
    let length = str.length; // 4
    let len = length % 2 == 0 ? length / 2 : length / 2 + 1 // 2

    for (let i = 0; i < len; i++) { 
        result[i] = str[(length - 1) - i]
        result[(length - 1) - i] = str[i]
    }

    return result.join('')
}

// reverse method --> 
console.log(reverse("name"))

// replace only replace the "first one"
a = 'test'
console.log(a.replace(a[3], "123"))  // 123est 

// join 可以依據給的參數結合字串
console.log([1, 2, 3].join('#')); // 1#2#3

///////////////////////////////////////////
// Class solution 
// time O(n) space O(n)
function reverseFromClass(str) {
    
    // check input !!  always check boundary !!
    if (!str || str.length < 1 || typeof str !== 'string') {
        return 'Not ok'
    }

    const backwards = [];
    const charLen = str.length - 1;
    for(let i = charLen; i >= 0 ; i--) {
        backwards.push(str[i])
    }

    return backwards.join('')
}

// easily way to achieve
function reverseFromClass_2(str) {
    return str.split('').reverse().join('')
}

// combine with lamda
const reverseFromClass_3 = str => str.split('').reverse().join('')
// str.split('') == [...str]
const reverseFromClass_4 = str => [...str].reverse().join('')

console.log(reverseFromClass('Hi my name'))
console.log(reverseFromClass_2('Hi my name'))
console.log(reverseFromClass_3('Hi my name'))
console.log(reverseFromClass_4('Hi my name'))

