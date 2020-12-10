console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  const newArr = [];
  for (let i = 0, j = i + 1; i < arr.length; i++, j++) {
    if (arr[i] === arr[j]) {
      newArr.push(arr[i])
    }
  }
  return newArr[0];
}

/*
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/