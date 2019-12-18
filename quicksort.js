const arr = [-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3];


function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr.pop();

  let left = [];
  let right = [];

  arr.forEach(el => {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));