// In this Kata, you will sort elements in an array by decreasing 
// frequency of elements. If two elements have the same frequency, 
// sort them by increasing value.
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. 
// If two elements have same frequency, we sort by increasing value

const solve = (arr) => [...arr].sort((a, b) => {
  let countA = 0;
  let countB = 0;
  for (let el of arr) {
    if (el === a) countA++;
    else if (el === b) countB++;
  };
  return countA === countB ? a - b : countB - countA;
});

console.log(solve([2,3,5,3,7,9,5,3,7]))
