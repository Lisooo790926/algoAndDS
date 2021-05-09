console.log(mergeSortedArray([0, 3, 4, 31], [0, 4, 6, 30, 31, 34]))


// my trial time O(n) space O(n)
function mergeSortedArray(ary_1, ary_2) {

    // missing the boundary checking!!! ALWAYS CHECK BOUNDARY
    // check even we don't have boundary check!

    const length = ary_1.length;
    const result = [];
    let j = 0;
    let inputElm = undefined;

    // add two pointer, smaller element will be added in array
    for (let i = 0; i < length;) {
        // use easy way to get input element instead of so many verfiy
        inputElm = ary_1[i] >= ary_2[j] ? ary_2[j++] : ary_1[i++];
        result.push(inputElm);
    }

    // if the ary2 length is larger than pointer
    // it means some elements left in ary_2
    const ary2Len = ary_2.length;
    for (; j < ary2Len;) {
        result.push(ary_2[j++])
    }

    return result
}

/////----------------------------------------------------------------
// Class (NOT QUITE GOOD, because not handling the zero condition
console.log(mergeSortedArray_class([3, 4, 31, 36], [0, 1, 4, 6, 30, 31]))

function mergeSortedArray_class(array1, array2) {

    // check input 
    if (array1.length == 0) {
        return array2
    }
    if (array2.length == 0) {
        return array1
    }

    const mergeArray = [];
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = j = 1;

    // really bad config!!!
    while (array1Item || array2Item) {
        if (shouldAddItem1(array1Item, array2Item)) {
            mergeArray.push(array1Item);
            array1Item = array1[i++];
        } else {
            mergeArray.push(array2Item);
            array2Item = array2[j++];
        }
    }

    return mergeArray;
}

// wrap the function to validate item
function shouldAddItem1(array1Item, array2Item){
    return (array2Item != 0 && !array2Item) || array1Item < array2Item;
}


// basic concept 
console.log(undefined > 6) // always false
console.log(0 == false) // true 