/* Q1: Longest Word */
function LongestWord(sen) {
  // check if sen is empty string
  if (sen.length === 0) {
    // return 'there are 0 words'
    return 'there are 0 words';
  }

  // the initial value for the output
  let output = ''; // 'lol'

  // Process
  // convert the sen (string) to an array (have each word alone)
  const words = sen.split(' '); // ["lol", 'a', "time"]
  // iterate over the array (words)
  for (let index = 0; index < words.length; index++) {
    // check if the element (the current word) the longest word till now or not
    if (words[index].length > output.length) {
      // make the output (longest world) equal current world
      output = words[index];
    }
  }
  // return the longest word
  return output;
}

/* Q1: Longest Word, solved in session*/
function longestWord(sen) {
  let longWord = '';
  // convert the sen (string) to an array (have each word alone)
  sen = sen.split(' ');
  for(let i =0; i < sen.length; i++) {
    if (sen[i].length > longWord.length) {
      longWord = sen[i];
    }
  }

  return longWord;
}

/* Q2: Longest Word_2 */

function longestWord_2(sen) {
  // Catching the special chars
  const SpecailCharRegex = /[^\w\s]/gi;
  let longWord = '';
  // convert the sen (string) to an array (have each word alone)
  sen = sen.split(' ');
  for (let i = 0; i < sen.length; i++) {
    sen[i] = sen[i].replace(SpecailCharRegex, '');
    if (sen[i].length > longWord.length) {
      longWord = sen[i];
    }
  }

  return longWord;
}

/* Q3: First Reverse */

function firstReverse(str) {
  let strReverse = '';
  str = str.split('');
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }

  return strReverse;
}

/* Q4: Username Validation */

function usernameValidation(str) {
  const SpecialCharRegex = /[^\w\s]/;
  return (
    str.length >= 4 &&
    str.length <= 25 &&
    !!str[0].match(/[A-Za-z]/) &&
    !SpecialCharRegex.test(str) &&
    str[str.length - 1] !== '_'
  );

  // Another solution with just Regex 
  // const reg1 = /^[a-zA-Z]([a-zA-Z0-9_]){2,22}[a-zA-Z0-9]$/; return reg1.test(str); 
}

/* Q5: Find Intersection */
/* Q6: Even or Not */
/* Q7: Sum Array Odd */
/* Q8: Unique Item */
/* Q9: Longest Sequence */
/* Q10: Times Of Most Freq Char */
/* Q11: Is Power Of Two */
/* Q12: Reverse Each Word */
/* Q13: Largest Possible Sum */

/* Q14:  */
/* Q15:  */
/* Q16:  */
/* Q17:  */
/* Q18:  */
/* Q19:  */
/* Q20:  */
/* Q21:  */
/* Q22:  */
/* Q23:  */
/* Q24:  */
/* Q25:  */
/* Q26:  */
/* Q27:  */
/* Q28:  */
/* Q29:  */
/* Q30:  */
/* Q31:  */
/* Q32:  */
/* Q33:  */
/* Q34:  */



uniqueItems2([1, 1, 1, 1, 1]);

