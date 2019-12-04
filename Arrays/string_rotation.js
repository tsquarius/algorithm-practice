// Assume you have a method isSubstring which checks if one word is
// a substring of another. Given two strings, s1 and s2,
// write code to check if s2 is a rotation of s1 using only one call
// to isSubstring (e.g. 'watterbottle' is a rotation of 'erbottlewat')



function isSubstring(str1, str2) {
  return str1.indexOf(str2) > 0;
}


// Strategy => if the strings are only rotated once, then
// str2 must exist in str1 + str1 if it is a substring.
// e.g. 'stellar' vs 'arstell' ==> arstell exists in 'stellARSTELLar'
function isRotation(str1, str2) {
  if (str1.length != str2.length) return false;
  return isSubstring(str1 + str1, str2);
}


console.log(isRotation("waterbottle", "erbottlewat")); //=> true
console.log(isRotation("hello", "rello")); //=> false