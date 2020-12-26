console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord_2(sen) {
  const RegExp = /[^A-Za-z0-9 ]/g; // OR const RegExp = /[^\w\s]/gi;
  sen = sen.replace(RegExp, "").split(' ');
  let max = "";
  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > max.length) max = sen[i];
  }
  return max;
}

/*
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/
