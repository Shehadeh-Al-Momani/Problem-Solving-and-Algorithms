console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
  const obj = {}, arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] > str[i]) {
        [str[j], str[i]] = [str[i], str[j]];
      }
    }
  }
  str.split('').forEach((item) => {
    obj[item] = obj[item] + 1 || 1;
  })
  for (const k in obj) {
    arr.push([k, obj[k]])
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] > arr[i][1]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}
// OR 
function characterFrequency(str) {
  const obj = {};
  str.split('').sort().forEach((item) => {
    obj[item] = obj[item] + 1 || 1;
  })
  const sortable = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return sortable;
}
/*
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/
