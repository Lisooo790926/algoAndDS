const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 2];

function mergeSort(array) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }

  // split array into right and left
  // separate as midLen
//   let midLength = length % 2 == 1 ? (length - 1) / 2 : length / 2;
//   let left = array.splice(0, midLength);
//   let right = array;

  // there is better way to get the middle
  const middle = Math.floor(length /2);
  const left = array.slice(0, middle)
  const right = array.slice(middle)


  // use recursive to merge the array
  return merge(mergeSort(left), mergeSort(right));
}


// O(n * log n)
function merge(left, right) {
  let result = [];

    console.log(left, right)

  // check the first condition (if each length is 0, then return other)
  if (left.length == 0) {
    return right;
  } else if (right.length == 0) {
    return left;
  }

  // splice can get first one, like queue, while loop to pop every first item
  while (right[0] && left[0]) {
    // console.log("value right " + right[0] + " value left " + left[0]);

    // if the left is smaller than right, put left first into array
    result.push(
      left[0] <= right[0] ? left.splice(0, 1)[0] : right.splice(0, 1)[0]
    );
  }

  // if there is left item, then concat it into result
  if (right.length > 0) {
    result = result.concat(right);
  } else if (left.length > 0) {
    result = result.concat(left);
  }

  console.log("result " + result)
  return result;
}

const answer = mergeSort(numbers);
console.log(answer);
