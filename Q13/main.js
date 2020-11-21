console.log('Problem Solving Q: 13');

/* Largest Possible Sum */

/*  
Write a function that calculates the largest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/

function largestPossibleSum(arr, n) {
  let num = 0;
  let temp_sum = 0;
  for (let i = 0; i < n - 1; i++) {
    temp_sum += arr[i];
  }
  for (let i = n - 1; i < arr.length; i++) {
    temp_sum += arr[i];
    if (temp_sum > num) {
      num = temp_sum;
    }
    temp_sum -= arr[i - n + 1];
  }
  return num;
}

/*
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
Examples:
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23

largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29


largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36
*/
