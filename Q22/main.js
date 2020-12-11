console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
  const obj = {}, arr = [], arrStr = str.split('');
  let temp;
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = i + 1; j < arrStr.length; j++) {
      if (arrStr[j] < arrStr[i]) {
        temp = arrStr[j];
        arrStr[j] = arrStr[i];
        arrStr[i] = temp;
      }
    }
  }
  for (let i = 0; i < arrStr.length; i++) {
    (!obj[arrStr[i]]) ? obj[arrStr[i]] = 1 : obj[arrStr[i]] += 1;
  }
  for (const k in obj) {
    arr.push([k, obj[k]])
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] > arr[i][1]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

/*
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/