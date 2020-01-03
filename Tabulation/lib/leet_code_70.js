// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n) {
  let table = new Array(n + 1).fill(0);
  table[0] = 0;
  for (let stairs = 1; stairs < table.length; stairs++) {
    for (let pace = 1; pace <= 2; pace++) {
      let stairsLeft = stairs - pace;
      if (stairsLeft === 0) table[stairs] += 1;
      if (table[stairsLeft]) table[stairs] += table[stairsLeft];
    }
  }

  return table[n];
}

climbStairs(3);

// console.log(`pace:${pace}, stairs:${stairs}, qty:${qty}`);
