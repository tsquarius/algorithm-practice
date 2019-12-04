// Problem:
// Write an algorithm such that if an element in an M x N matrix is 0,
// its entire row and column are set to 0

// Notes -
// 1. Will use a nested array to represent these matrices
// An example will be:
// [[a,b,c],
//  [d,e,f]]
// 2. Index of subarray will be the row index and
// 3. index of elements within subarray will be column index

// 4. If any element within subarray is 0, we convert entire subarray to 0's.
//    Then we iterate through other rows and assign the column to 0.

// Assumption is that all rows contain same number of columns => no empty values

const matrix1 = [
  [1, 0],
  [2, 4]
];
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const matrix3 = [
  ["a", "b", -1],
  [1, 4, "c"]
];
const matrix4 = [
  ["a", 0, -1],
  [1, 2, 0],
  [5, 6, 8]
];

// expect zeroMatrix(matrix1) => [[0,0], [2,0]]
// expect zeroMatrix(matrix2) => [[1,2,3],[4,5,6],[7,8,9]]
// expect zeroMatrix(matrix3) => [[a, b, -1], [1,4,c]]
// expect zeroMatrix(matrix4) => [[0, 0, 0], [0,0,0], [5, 0, 0]]

// O(n) solution
function zeroMatrix(matrix) {
  let newMatrix = [];
  let zeroColumn = new Set();

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    let zeroRow = false;
    let newRow = [];
    for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
      let currentEl = matrix[rowIdx][colIdx];

      if (currentEl === 0) {
        zeroColumn.add(colIdx);
        zeroRow = true;
      }

      if (zeroColumn.has(colIdx)) {
        newRow.push(0);
      } else {
        newRow.push(currentEl);
      }
    }

    if (zeroRow) {
      newMatrix.push(newRow.map(el => 0));
    } else {
      newMatrix.push(newRow);
    }
  }

  return newMatrix;
}

console.log(zeroMatrix(matrix1));
console.log(zeroMatrix(matrix2));
console.log(zeroMatrix(matrix3));
console.log(zeroMatrix(matrix4));
