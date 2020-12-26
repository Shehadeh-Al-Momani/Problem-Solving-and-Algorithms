console.log('Problem Solving Q:16 ');

/* evenAppearance */

/*  
Find the first item that appear an even number of times in an array.
*/

function evenAppearance() {
  let obj = {};
  arr.forEach((e) => {
    obj[e] = obj[e] + 1 || 1;
  });
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
}

/*
Examples:
evenAppearance([1,2,6,6]) // => 6
evenAppearance([1,2,9,8,8,6,6]) // => 8
evenAppearance([1,9,7,3,6,6,8,9,9]) // => 6
*/