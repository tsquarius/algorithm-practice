// https://leetcode.com/problems/first-missing-positive/

// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:
// Input: [1,2,0]
// Output: 3

// Example 2:
// Input: [3,4,-1,1]
// Output: 2

// Example 3:
// Input: [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function(nums) {
  let min = 1;
  let prev = new Set();

  for (let i in nums) {
    if (nums[i] <= 0) continue;

    if (nums[i] === min) {
      min++;
      while (prev.has(min)) {
        min++;
      }
    }
    prev.add(nums[i]);
  }

  return min;
};
