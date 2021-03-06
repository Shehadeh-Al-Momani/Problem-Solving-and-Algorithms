console.log('Problem Solving Q: 25');

/*array check   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

function is_array(input) {
  return Array.isArray(input);
}
// OR 
function is_array(input) {
  return toString.call(input) === "[object Array]";
};
/*
Examples:
is_array('w3resource') // => false
is_array ([1, 2, 4, 0]) // => true
*/
