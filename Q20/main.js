console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
  let temp, limit = 3, factor = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  for (let i = 0; i < limit; i++) {
    factor *= arr[i];
  }
  return factor;
}

/*
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/