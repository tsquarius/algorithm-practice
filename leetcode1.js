// https://leetcode.com/problems/3sum/

// Naive Approach
function threeSum_P1(nums) {
  let combos = [];
  let pairs = {};
  let triplets = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) break;
      if (pairs[[i, j]]) break;
      let numNeeded = 0 - nums[i] - nums[j];
      if (pairs[numNeeded]) {
        pairs[numNeeded].push([i, j]);
      } else {
        pairs[numNeeded] = [[i, j]];
      }
    }
  }

  for (let x = 0; x < nums.length; x++) {
    let currentNum = nums[x];
    if (pairs[currentNum]) {
      pairs[currentNum].forEach(subArr => {
        let [a, b] = subArr;
        if (x === a || x === b) return;
        let tripleCombo = [currentNum, nums[a], nums[b]].sort();
        if (triplets[tripleCombo]) return;
        combos.push(tripleCombo);
        triplets[tripleCombo] = true;
      });
    }
  }

  return pairs;
}

// Slightly better version
var threeSum_P2 = function(nums) {
  let combos = new Set();
  let triplets = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let map = {};

    for (let j = i + 1; j < nums.length; j++) {
      if (j === i) break;

      if (map[nums[j]] !== undefined) {
        let triple = [currentNum, nums[j], map[nums[j]]].sort();

        if (!triplets[triple]) {
          combos.add(triple);
          triplets[triple] = true;
        }
      } else {
        let targetNum = 0 - currentNum - nums[j];
        map[targetNum] = nums[j];
      }
    }
  }

  return [...combos];
};

// Fastest Solution
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  if (nums.every(el => el === 0)) return [[0, 0, 0]];
  let combos = [];
  let comboTracker = {};
  let prevX = new Set();

  const sortedNums = nums.sort((a, b) => a - b);
  let x = 0;

  while (x < sortedNums.length - 1) {
    let y = x + 1;
    let z = sortedNums.length - 1;

    while (y != z) {
      if (prevX.has(sortedNums[x])) break;
      let zeroSum = sortedNums[x] + sortedNums[y] + sortedNums[z];
      let zeroArray = [sortedNums[x], sortedNums[y], sortedNums[z]];
      if (zeroSum === 0) {
        if (!comboTracker[zeroArray]) combos.push(zeroArray);
        comboTracker[zeroArray] = true;
        y++;
      } else if (zeroSum > 0) {
        z--;
      } else if (zeroSum < 0) {
        y++;
      }
    }
    prevX.add(sortedNums[x]);
    x++;
  }

  return combos;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, 2])); // => [ [-1,0,1], [-1,-1,2] ]
console.log(threeSum([0, 0, 0, 0])); // => [ [0,0,0] ]
console.log(threeSum([3, 0, -2, -1, 1, 2])); // => [[-2,-1,3],[-2,0,2],[-1,0,1]]
console.log(
  threeSum([-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3])
); //=>[[-5,1,4],[-5,2,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-2,-1,3],[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]]


// https://leetcode.com/problems/valid-sudoku/

// https://leetcode.com/problems/first-missing-positive/
