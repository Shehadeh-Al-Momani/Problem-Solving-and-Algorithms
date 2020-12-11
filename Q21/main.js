console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  const obj = {};
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    (!obj[str[i]]) ? obj[str[i]] = 1 : obj[str[i]] += 1;
  }
  for (let k in obj) {
    if (obj[k] === 1) {
      unique += k;
    }
  }
  return unique;
}
/*
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/
