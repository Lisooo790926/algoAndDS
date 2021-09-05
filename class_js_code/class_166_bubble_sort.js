// my trial for bubble sort
// O(n^2)
function sort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i; j++) {
      switchPosition(list, j);
    }
  }
}

function switchPosition(list, index) {
  let firstItem = list[index];
  let secondItem = list[index + 1];
  if (firstItem > secondItem) {
    list[index] = secondItem;
    list[index + 1] = firstItem;
  }
}

let list = [2, 3, 5, 0, 3];
sort(list);

console.log(list);
