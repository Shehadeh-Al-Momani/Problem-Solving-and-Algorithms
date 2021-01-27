console.log('Problem Solving Q:26 ');

/*  */

/*  
Write a JavaScript function to clone an array.
*/

function reverse(input) {
  let temp, result = input;
  if (typeof input === "string") {
    result = input.split('');
  }
  let n = result.length - 1;
  for (let i = 0; i < result.length / 2; i++) {
    temp = result[i];
    result[i] = result[n];
    result[n] = temp;
    n = n - 1;
  }
  return (typeof input === "string") ? result.join('') : result;
}
// OR 
function reverse(input) {
  return (typeof input === "string") ? [...input].reverse().join('') : input.reverse();
}
// OR 
function reverse(input) {
  let result;
  (typeof input === "string") ? result = '' : result = [];

  for (let letter of input) {
    result = letter + result
  }
  return (typeof input === "string") ? result : [...result].map(e => Number(e));
}
/*
Examples:
reverse('hello') // => "olleh"
reverse('apple')  // => "elppa"
reverse('Greetings!') // => "!sgniteerG"
*/

 