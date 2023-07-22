/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

// function `sum` (number array)
function sum (arrayNumber){
    // If the array is empty or null, add extra check to see if the array is an array
        // return zero
    if(arrayNumber === null || !Array.isArray(arrayNumber) || arrayNumber.length === 0) return 0
    
    // loop the number array to get all the odd values and sum them
    // returns the sum of all odd values
    return arrayNumber.reduce((acc, number) => acc + (number % 2 !== 0 ? number : 0 ), 0)

}
    

module.exports = sum;
