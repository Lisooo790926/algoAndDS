function reverse(str) {

    let result = [];
    let length = str.length; // 4
    let len = length % 2 == 0 ? length / 2 : length / 2 + 1 // 2

    for (let i = 0; i < len; i++) { // time O(n/2) space O(n)
        result[i] = str[(length -1) - i]
        result[(length -1) - i] = str[i]
    }

    return result.join('')
}

// reverse method --> 
console.log(reverse("name"))

// replace only replace the "first one"
a = 'test'
console.log(a.replace(a[3],"123"))  // 123est 

// join 可以依據給的參數結合字串
console.log([1,2,3].join('#')) // 1#2#3

