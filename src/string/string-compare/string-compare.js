/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.

If the two arguments doesn't have the same length or at least one is null, return -1 instead.

Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1

Add you own tests.

*/

// TODO add your code here

const compare = (string1, string2) => {

  if (!string1 || !string2 || string1.length !== string2.length) return -1;

  let count = 0;

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) count++;
  }

  return count;
};

module.exports = compare;
