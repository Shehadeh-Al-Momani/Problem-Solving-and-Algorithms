console.log('Problem Solving Q:26 ');

/*  */

/*  
Write a JavaScript function to clone an array.
*/

function array_Clone(array) {
  return JSON.parse(JSON.stringify(array));
}
// OR 
function array_Clone(array) {
  return array.map((item) => item)
}
// OR 
function array_Clone(array) {
  return array.slice(0);
};

/*
Examples:
array_Clone ([1,2,3]) // =>[1,2,3]
array_Clone ([1,9,8]) // =>[1,9,8]
*/

