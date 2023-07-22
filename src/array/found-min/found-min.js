/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
// Create a function `min`
const min = (array) => {
  // If the array is empty or null, return null.
  if (array === null || !Array.isArray(array) || array.length === 0)
    return null;
  // founds the minimum value of a number array
  let minValue = array[0];

  array.forEach((number) => (number < minValue ? (minValue = number) : null));

  // return minimum value
  return minValue;
};

module.exports = min;
