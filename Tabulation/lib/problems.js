// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end

// iteration
function stepperIter(nums) {
  for (let i=0; i < nums.length; i++) {
    let num = nums[i];
    let subsequent = nums.slice(i+1, num+1);
    if (!subsequent.some(n => n > 0)) return false;
    if (subsequent.some(m => (m+1+i) >= nums.length-1 )) return true; 
  }
}


//tabulation
function stepper(nums) {
  let table = new Array(nums.length).fill(false);
  if (nums[0] > 0) table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;
    if (nums[i] === 0) continue;

    for (let j = i+1; j <= nums[i] + i; j++) {
      table[j] = true;
    }

  }

  return table[table.length -1];
}

// recursion
function stepperRecursion(nums, memo = {}) {
  if (nums.length in memo) return memo[nums.length];
  if (nums.length === 0) return true;
  let currentNum = nums[0];

  for (let i = 1; i <= currentNum; i++) {
    if (nums[i] === 0) continue;
    if (stepper(nums.slice(i), memo)) {
      memo[nums.length] = true;
      return true;
    }
  }

  memo[nums.length] = false;

  return false;
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums) {
  if (!nums.length) return 0;
  let table = new Array(nums.length);
  table[0] = nums[0];
  table[1] = nums[1];
  
  for (let i=2; i < nums.length; i++) {
    let prev = table.slice(0,i-1);
    table[i] = nums[i] + Math.max(...prev);
  }

  return Math.max(...table);
}


function maxAA(nums) {
  let table = new Array(nums.length).fill(0);
  table[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curNum = nums[i];
    let nonAdjSum = table[i-2] ? curNum + table[i-2] : curNum;
    let adjNum = table[i-1];
    
    table[i] = Math.max(adjNum,nonAdjSum);
  }

  return table;
}


// memo
function maxNonAdjacentSum2(nums, memo = {}) {
  if (nums.length in memo) return memo[nums.length];
  if (!nums.length) return 0;

  let max = nums[0];

  for (let i in nums) {
    for (let j = i+2; j < nums.length; j++) {
      let nextArr = nums.slice(j);
      if (max < nums[i] + maxNonAdjacentSum(nextArr, memo)) {
        max = nums[i] + maxNonAdjacentSum(nextArr, memo);
      }
    }
  }

  memo[nums.length] = max;
  return memo[nums.length];
}

function maxMemoAA(nums, memo = {}) {
  if (nums.length in memo) return memo[nums.length];
  if (!nums.length) return 0;

  let first = nums[0];

  memo[nums.length] = Math.max(
    first + maxMemoAA(nums.slice(2), memo),
    maxMemoAA(nums.slice(1), memo)
  );

  return memo[nums.length];
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
  table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;
  for (let i in table) {
    for (let j in coins) {
      let min;
      if (coins[j] > i) continue;
      let nextAmt = i - coins[j];
      if (nextAmt === 0) min = 1;
      if (table[nextAmt]) min = 1 + table[nextAmt];
      if (min < table[i]) table[i] = min;
    }
  }

  return table[table.length-1];

}

function changeAA(coins, amount) {
  let table = new Array(amount +1).fill(Infinity);
  table[0] = 0;

  coins.forEach(val => {
    for (let amt = 0; amt < table.length; amt++) {
      for (let qty = 0; qty * val <= amt; qty++) {
        remainder = amt - qty * val;
        let attempt = table[remainder] + qty;
        if (attempt < table[amt]) table[amt] = attempt;
      }
    }
  });

  return table;
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};