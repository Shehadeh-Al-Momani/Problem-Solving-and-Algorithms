console.log('Problem Solving Q: 8');

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) unique.push(arr[i]);
  }
  return unique.length;
}
// OR 
function uniqueItems(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = obj[item] + 1 || 1;
  })
  return Object.keys(obj).length;
}
// OR 
function uniqueItems(arr) {
  let obj = {}, unique = 0;
  arr.forEach((item) => {
    obj[item] = 1;
  })
  for (const k in obj) {
    unique+= obj[k] 
  }
  return unique;
}

/*
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/

