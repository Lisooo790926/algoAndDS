const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  //O(n^2) really bad
  for (let i = 0; i < length; i++) {
    let insertElm = array[i];
    let insertIndex = i;
    console.log(insertElm);insertElm
    for (let j = 0; j < i; j++) {
      if (insertElm > array[j]) {
        insertIndex = j;
        break;
      }
    }

    // O(n)
    array.splice(i, 1);
    array.splice(insertIndex, 0, insertElm)
  }
}

insertionSort(number);
console.log(number);
