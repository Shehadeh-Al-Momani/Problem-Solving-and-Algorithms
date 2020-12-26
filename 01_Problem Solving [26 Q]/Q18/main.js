console.log('Problem Solving Q:18 ');

/*  findFactorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function findFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * findFactorial(n - 1)
}
// OR 
function findFactorial(n) {
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  return factor;
}
/*
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
*/