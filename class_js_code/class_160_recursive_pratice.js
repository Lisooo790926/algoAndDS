// recursive string
// my trial !!!! 
function reverseString(str){
    if(str.length == 0){
        return str
    } 
    return reverseString(str.substring(1)) + str[0]
}

console.log(reverseString("12345"))


function reverseString_2(str) {
    const length = str.length - 1
    if(length == 0){
        return str;
    }
    return str[length] + reverseString_2(str.substring(0, length))
}

console.log(reverseString_2('12445'))