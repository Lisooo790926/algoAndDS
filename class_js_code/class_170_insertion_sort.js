const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// not the best way to import
// every situation will go through the loop
function insertionSort(array) {
  const length = array.length;
  //O(n^2) really bad
  for (let i = 0; i < length; i++) {
    let insertElm = array[i];
    let insertIndex = i;
    console.log(insertElm);
    insertElm;
    for (let j = 0; j < i; j++) {
      if (insertElm > array[j]) {
        insertIndex = j;
        break;
      }
    }

    // O(n)
    array.splice(insertIndex, 0, array.splice(i, 1)[0]);
  }
}

// class solution, it better to understand
function insertionSort_class(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] > array[0]) {
      // if larger than first one then prepend
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 0; j < i; j++) {
        // remove the current space and add into j index
        if (array[i] > array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
      }
    }
  }
}

insertionSort(number);
console.log(number);

insertionSort_class(number);
console.log(number);
