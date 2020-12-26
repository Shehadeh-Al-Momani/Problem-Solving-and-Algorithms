console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1)
}
// OR 
function factorial(n) {
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  return factor;
}
/*
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/