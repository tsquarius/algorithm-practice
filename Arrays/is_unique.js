// Problem:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// expect isUnique('flakes') => true
// expect isUnique('hello') => false
// expect isUnique('') => true
// expect isUnique(123) => return null


// my solution 1 => O(n), using Hash
function isUnique(str) {
  if (typeof str != "string") return null;
  if (!str.length) return true;

  let trackLetters = {};

  for (let letterIdx in str) {
    let letter = str[letterIdx];
    if (!trackLetters[letter]) {
      trackLetters[letter] = true;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isUnique("flakes"));
console.log(isUnique("hello"));
console.log(isUnique(""));
console.log(isUnique(123));

// my solution 2 => O(n2), compares against itself

function isUnique2(str) {
  if (typeof str != "string") return null;
  if (!str.length) return true;

  for (let letterIdx in str) {
    let count = 1;
    for (let compareIdx in str) {
      if (letterIdx === compareIdx) continue;
      if (str[letterIdx] === str[compareIdx]) count += 1;
      if (count > 1) return false;
    }
  }

  return true;
}

console.log(isUnique2("flakes"));
console.log(isUnique2("hello"));
console.log(isUnique2(""));
console.log(isUnique2(123));