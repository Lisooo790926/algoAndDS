// my trial
// O(N^2)
function sort(list) {
  for (let i = 0; i < list.length; i++) {
    swapMaxToTop(list, i);
  }
}

function swapMaxToTop(list, index) {
  let maxIndex = index;
  for (let j = index; j + 1 < list.length; j++) {
    maxIndex = list[j] > list[j + 1] ? j : j + 1;
  }
  let swapValue = list[index];
  list[index] = list[maxIndex];
  list[maxIndex] = swapValue;
}

let list = [2, 3, 5, 99, 3];
sort(list);

console.log(list);
