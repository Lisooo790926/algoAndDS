function LongestWord(sen) {

    const regex = /[a-zA-Z]+/g;
    let longestLen = 0
    let tempElm;
    let elm;

    while ((elm = regex.exec(sen)) != null) {
        if (!tempElm || elm[0].length > longestLen) {
            longestLen = elm[0].length;
            tempElm = elm[0]
        }
    }

    // code goes here  
    return tempElm;
}

console.log(LongestWord("I love dogs"))