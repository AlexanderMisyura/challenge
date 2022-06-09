// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Notes
// Array/list size is at least 2.
// Array/list numbers could be a mixture of positives, negatives also zeroes .
// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

function adjacentElementsProduct(arr) {
  return arr.slice(1, -1).reduce((acc, curr, i) => {
    let currProd = curr * arr[i + 2];
    return acc < currProd ? currProd : acc
  }, arr[0] * arr[1]);
};
