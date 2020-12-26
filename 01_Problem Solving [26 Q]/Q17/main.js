console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/
function firstNonRepeatedCharacter(str) {
  const obj = {};
  str.split('').forEach((e) => {
    obj[e] = obj[e] + 1 || 1;
  })
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return null;
}
// OR
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
firstNonRepeatedCharacter('AA') // => 'U'
*/

