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

function compareAndSwap(array, index, swapIndex, condition) {
  if (condition) {
    let pickValue = array[index];
    array[index] = array[swapIndex];
    array[swapIndex] = pickValue;
    return true;
  }
  return false;
}

const answer = quickSort(numbers);
console.log(answer);
