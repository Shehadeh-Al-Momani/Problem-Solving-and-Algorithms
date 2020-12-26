console.log('Problem Solving Q: 5 ');

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr
which will contain 2 elements: the first element will represent a list of comma-separated 
numbers sorted in ascending order, the second element will represent a second list of 
comma-separated numbers (also sorted). Your goal is to return a comma-separated 
string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.
*/

function findIntersection(strArr) {
  const arr1 = strArr[0].split(', '), arr2 = strArr[1].split(', ');
  const arr = arr1.filter(e => arr2.includes(e));
  if (!arr.length) return false;
  return arr;
}
// OR 
function findIntersection(strArr) {
  let arr1 = strArr[0].split(', '), arr2 = strArr[1].split(', ');
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      result.push(arr1[i]);
    }
  }
  return (result.length > 0) ? result.join() : false;
}
/*
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/

