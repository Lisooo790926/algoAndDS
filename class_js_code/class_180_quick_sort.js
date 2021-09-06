const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 2];

// my trial
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const length = array.length;
  const pickValue = array[0];
  console.log("pickValue : " + pickValue);
  let pickIndex = 0;
  let isFromRight = true;
  let index;
  let condition;
  let isExchange;
  let fromRightIndex = length - 1;
  let fromLeftIndex = 0;

  for (let i = 0; i < length; i++) {
    index = isFromRight ? fromRightIndex : fromLeftIndex;
    condition = isFromRight
      ? pickValue > array[index]
      : pickValue < array[index];
    isExchange = compareAndSwap(array, pickIndex, index, condition);
    pickIndex = isExchange ? index : pickIndex;
    isFromRight = isExchange ? !isFromRight : isFromRight;
    isFromRight ? fromRightIndex-- : fromLeftIndex++;
    console.log(pickIndex, isFromRight, "isExcahnge : " + isExchange);
  }

  const left = array.slice(0, pickIndex);
  const right = array.slice(pickIndex + 1);

  console.log(left, right);

  return quickSort(left).concat(array[pickIndex]).concat(quickSort(right));

  // -------- recursive ------
  // pick one element
  // compare whole array with this element
  // swap whole array
  // -------- recursive ------
  // check left array, recursive
  // check right array
  // combine this array with above element
}

// const answer = quickSort(numbers);
// console.log(answer);

function compareAndSwap(array, index, swapIndex, condition) {
  if (condition) {
    let pickValue = array[index];
    array[index] = array[swapIndex];
    array[swapIndex] = pickValue;
    return true;
  }
  return false;
}

// class_solution better in space complexity
// it didn't separate the array to sort, it just use the same array
function quickSort_class(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;

    // this partition method is key
    // to compare only one way 
    // if larger than pivot move right, otherwise keep it!!!
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort_class(array, left, partitionIndex - 1);
    quickSort_class(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  console.log("current pivot value is " + pivotValue)
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
    console.log(array)
  }
  swap(array, right, partitionIndex);
  console.log(array)
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort_class(numbers, 0, numbers.length - 1);
console.log(numbers);
