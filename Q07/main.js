console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arr) {
  const newArr = arr.filter(e => e % 2 !== 0).reduce((acc, e) => acc + e);
  return newArr;
}

/*
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
