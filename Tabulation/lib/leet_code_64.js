// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.


// Given a m x n grid filled with non-negative numbers, find a path 
// from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

function minPathSum_p1(grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  let table = Array.from(Array(rowLen), () => new Array(colLen));

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen ; j++) {
      let curNum = grid[i][j];
      let left = (j-1) >= 0 ? table[i][j-1] : null;
      let up = (i-1) >= 0 ? table[i-1][j] : null;

      if (left === null && up === null) {
        table[i][j] = curNum;
      } else if (left === null) {
        table[i][j] = curNum + up;
      } else if (up === null) {
        table[i][j] = curNum + left;
      } else {
        table[i][j] = curNum + Math.min(left,up);
      }
    }
  }

  return table[rowLen-1][colLen-1];
}

function minPathSum_p2(grid) {
  const colLen = grid[0].length;
  const flatGrid = Array.prototype.concat.apply([], grid);
  let table = new Array(flatGrid.length);
  table[0] = flatGrid[0];

  for (let i = 1; i < table.length; i++) {
    let curNum = flatGrid[i];
    let left = i % colLen > 0 ? table[i - 1] : Infinity;
    let up = i - colLen >= 0 ? table[i-colLen] : Infinity ;

    table[i] = curNum + Math.min(left, up);
  }

  return table[table.length-1];
}


/// neeed to add a memo
function minPathSum(grid, memo={}) {
  let identifier = grid.length.toString() + "," + grid[0].length.toString();
  if (identifier in memo) return memo[identifier];

  if (grid.length === grid[0].length === 1) return grid[0][0];
  let min = grid[0][0];

  if (grid.length > 1 && grid[0].length >1) {
    min += Math.min(
      minPathSum(grid.slice(1)),
      minPathSum(grid.map(row => row.slice(1)))
    );
  } else if (grid.length > 1) {
    min += minPathSum(grid.slice(1));
  } else if (grid[0].length > 1){
    min += minPathSum(grid.map(row => row.slice(1)));
  }
  
  memo[identifier] = min; 
  return memo[identifier];
}

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);

minPathSum([
  [1, 2, 5],
  [3, 2, 1]
]);

minPathSum(
[
  [0, 2, 2, 6, 4, 1, 6, 2, 9, 9, 5, 8, 4, 4],
  [0, 3, 6, 4, 5, 5, 9, 7, 8, 3, 9, 9, 5, 4],
  [6, 9, 0, 7, 2, 2, 5, 6, 3, 1, 0, 4, 2, 5],
  [3, 8, 2, 3, 2, 8, 8, 7, 5, 9, 6, 3, 4, 5],
  [4, 0, 1, 3, 9, 2, 0, 1, 6, 7, 9, 2, 8, 9],
  [6, 2, 7, 9, 0, 9, 5, 2, 7, 5, 1, 4, 4, 7],
  [9, 8, 3, 3, 0, 6, 8, 0, 8, 8, 3, 5, 7, 3],
  [7, 7, 4, 5, 9, 1, 5, 0, 2, 2, 2, 1, 7, 4],
  [5, 1, 3, 4, 1, 6, 0, 4, 3, 8, 4, 3, 9, 9],
  [0, 6, 4, 9, 4, 1, 5, 5, 4, 2, 5, 7, 4, 0],
  [0, 1, 6, 6, 4, 9, 2, 7, 8, 2, 1, 3, 3, 7],
  [8, 4, 9, 9, 2, 3, 8, 6, 6, 5, 4, 1, 7, 9]
]);

minPathSum([
  [1, 2],
  [1, 1]
]);