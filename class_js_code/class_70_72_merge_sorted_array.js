console.log(mergeSortedArray([0,3,4,31], [4,6,30,31,34]))


// my trial
function mergeSortedArray(ary_1, ary_2) {
    
    const length = ary_1.length;
    const result = [];
    let j = 0;
    let inputElm = undefined;

    // add two pointer, smaller element will be add in array
    for(let i=0;i<length;){
        inputElm = ary_1[i] >= ary_2[j] ? ary_2[j++] : ary_1[i++];
        result.push(inputElm);
    }

    // if the ary2 length is larger than pointer
    // it means some element left in ary_2
    const ary2Len = ary_2.length;
    for(;j<ary2Len;){
        result.push(ary_2[j++])
    }

    return result
}