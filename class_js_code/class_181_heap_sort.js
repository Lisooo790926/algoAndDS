const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 2];

// my trial
// if compare parent, will not be used in pop max, change to use compare child
function max_heapify(index, array) {
  const element = array[index];
  const parent = index % 2 !== 0 ? (index - 1) / 2 : (index - 2) / 2;
  const parentValue = array[parent];

  if (parentValue < element) {
    swap(index, parent, array);
    console.log(array);
    if (parent !== 0) {
      max_heapify(parent, array);
    }
  }
}

function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// one by one make it heapify !
for (let index in numbers) {
  max_heapify(index, numbers);
}

// TODO change to use the way like insertion


// 283, 99, 63, 87, 4, 5, 6, 2, 44, 1, 2
// only for heapify the array
console.log(numbers);
console.log("-------------heap sorting--------------");

// add the method for heapify from parent to child
function max_heapify_child(index, endIndex, array) {
  if (endIndex < index * 2 + 2) {
    return;
  }

  const element = array[index];
  const childLeft = array[2 * index + 1];
  const childRight = array[2 * index + 2];
  let changedIndex;

  // these condition should be modified!
  if (
    childLeft &&
    childLeft > element &&
    (childLeft >= childRight || !childRight)
  ) {
    changedIndex = 2 * index + 1;
  } else if (
    childRight &&
    childRight > element &&
    (childLeft <= childRight || !childLeft)
  ) {
    changedIndex = 2 * index + 2;
  }

  if (changedIndex) {
    swap(changedIndex, index, array);
    console.log(array);
    max_heapify_child(changedIndex, endIndex, array);
  }
}

// after sorting
// swap max and last one, and pop it, and arrange the order
function heapSort(array) {
  let endIndex = array.length - 1;
  while (endIndex > 0) {
    swap(0, endIndex, array);
    endIndex--;
    console.log(array, "in main sorting loop");
    max_heapify_child(0, endIndex, array);
  }
}

heapSort(numbers);
// result [ 1, 2, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
console.log(numbers);
