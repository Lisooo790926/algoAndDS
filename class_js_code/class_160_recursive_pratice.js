// recursive string
// my trial !!!! 
function reverseString(str){
    if(str.length == 0){
        return str
    } 
    return reverseString(str.substring(1)) + str[0]
}

console.log(reverseString("12345"))