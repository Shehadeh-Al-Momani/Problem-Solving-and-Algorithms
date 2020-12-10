console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr[0];
}
/*
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/