/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {

    // key is building the comparator!!! remember 
    nums.sort((a, b) => {
        let str1 = a + "" + b
        let str2 = b + "" + a
        return parseInt(str2) - parseInt(str1) 
    })

    let result = ""
    for(let num of nums) {
        if(result == "" && num == 0) {
            continue;
        }
        result+=num
    }

    return result == "" ? "0" : result
};