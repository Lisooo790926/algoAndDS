const numbers = [99, 44, 6, 2, 1, 5, 63, 283, 87, 4, 2];

// my trial
// if compare parent, will not be used in pop max, change to use compare child
function max_heapify(index, array, endIndex) {

  const parent = array[index];
  const left = 2 * index + 1
  const right = 2 * index + 2
  let largeIndex;

  if (endIndex > left && array[left] > parent && array[left] >= array[right]) {
    largeIndex = left;
  } else if (endIndex > right && array[right] > parent && array[right] > array[left]) {
    largeIndex = right;
  }

  if (largeIndex !== undefined) {
    swap(index, largeIndex, array)
    max_heapify(largeIndex, array, endIndex)
  }
}

function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function buildHeap(array) {
  // one by one make it heapify !
  const heapSize = array.length;
  const startIndex = Math.floor(heapSize / 2) // start from half 
  for (let index = startIndex; index >= 0; index--) {
    max_heapify(index, array, heapSize);
  }

  // only for heapify the array
  // 283, 99, 63, 87, 4, 5, 6, 2, 44, 1, 2
  console.log(array);
}

console.log("-------------heap sorting--------------");

// after sorting
// swap max and last one, and pop it, and arrange the order
function heapSort(array) {

  buildHeap(array)

  let endIndex = array.length - 1;
  while (endIndex > 0) {
    swap(0, endIndex, array);
    endIndex--;
    // console.log(array, "in main sorting loop");
    max_heapify(0, array, endIndex);
  }
}

heapSort(numbers);
// result [ 1, 2, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
console.log(numbers);
