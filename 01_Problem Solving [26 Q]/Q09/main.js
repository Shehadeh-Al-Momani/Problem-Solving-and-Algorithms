console.log('Problem Solving Q: 9');

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s 
and 0s.
*/

function longestSequence(arr) {
  let newArr = arr.join('').split('0'), result = '';
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > result.length) {
      result = newArr[i];
    }
  }
  if (!result) return 'There is no one sequenced';
  return result.length;
}
// OR 
function longestSequence(arr) {
  let longest = Number.NEGATIVE_INFINITY, currentSequence = 0;
  arr.forEach((num) => {
    (num) ? currentSequence++ : ((currentSequence > longest) ? longest = currentSequence : longest, currentSequence = 0);
  });
  (currentSequence > longest) ? longest = currentSequence : longest;
  return (longest) ? longest : 'There is no one sequenced';
}

/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/

