console.log('Problem Solving Q:15 ');

/*  jointCharacters*/

/*  
Write a function that accepts two strings , and returns only the characters that are joint on both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function jointCharacters(str1, str2) {
  str1 = str1.split(' ').join(''), str2 = str2.split(' ').join('');
  const arr = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] === str1[i] & arr.indexOf(str2[j]) === -1) {
        arr.push(str2[j]);
      }
    }
  }
  return arr.join('');
}
// OR 
function jointCharacters(str1, str2) {
  const obj = {};
  let commonCharacters = '';
  str1.split('').forEach((e) => {
    (!obj[e]) ? obj[e] = 1 : null;
  })
  str2.split('').forEach((e) => {
    (obj[e]) ? obj[e] = 2 : 1;
  })
  for (const key in obj) {
    if (obj[key] > 1 && key !== ' ') {
      commonCharacters += key;
    }
  }
  return commonCharacters;
}
// OR 
function jointCharacters(str1, str2) {
  let commonCharacters = '';
  for (let ch of str1) {
    if (str2.includes(ch) && !commonCharacters.includes(ch) && ch !== ' ') {
      commonCharacters += ch;
    }
  }
  return commonCharacters;
};
 

/* 
Examples:
jointCharacters('abc', 'abc') // => 'abc'
jointCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
jointCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/