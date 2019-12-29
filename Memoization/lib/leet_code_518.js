// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.

var change = function(amount, coins, memo = {}) {
  if (!coins.some(coin => coin <= amount)) return memo;


  for (let i in coins) {
    if (coins[i] > amount) continue;
    if (coins[i] === amount) return {};

  }

  return memo;

};


function minChange(coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  let min = Infinity;

  for (let i in coins) {
    if (coins[i] > amount) continue;
    let count = 1 + minChange(coins, amount - coins[i], memo);
    if (min > count) min = count;
  }

  memo[amount] = min;

  return min;
}
