console.log('Problem Solving Q: 6');

/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/
function evenOrNot(n) {
  return n % 2 === 0;
}
// OR 
function evenOrNot(n) {
  return !(n % 2);
}

/*
Examples:
evenOrNot(1) // => false
evenOrNot(2) // => true
evenOrNot(5) // => false
evenOrNot(99) // => false
evenOrNot(0) // => true
*/
