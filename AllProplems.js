console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
  let LongestWord = "";
  sen.split(' ').forEach((item) => {
    if (item.length > LongestWord.length) LongestWord = item;
  })
  return LongestWord;
}

/*
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/

// ****************************************************************************************************************** // 
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

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function firstReverse(str) {
    return str.split('').reverse().join('');
}

// OR 
function firstReverse(str) {
    let strReverse = '';
    str = str.split('');
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
}
/*
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/


// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 4 ');

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and 
determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters. 
2. It must start with a letter. 
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character. 

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  const letters = /[A-Za-z]/g, regExp = /[A-Za-z0-9_]/g, regExp_ = /[^_]/g;
  if (4 < str.length < 25 && letters.test(str[0]) && regExp.test(str) && regExp_.test(str[str.length - 1]))
    return true;
  else return false
}
// OR 
function usernameValidation(str) {
  const SpecialCharRegex = /[^\w\s]/;
  return (
    str.length >= 4 &&
    str.length <= 25 &&
    !!str[0].match(/[A-Za-z]/) &&
    !SpecialCharRegex.test(str) &&
    str[str.length - 1] !== '_'
  );
  // OR 
  function usernameValidation(str) {
    reg1 = /^[a-zA-Z]([a-zA-Z0-9_]){2,22}[a-zA-Z0-9]$/;
    return reg1.test(str);
  };
/*
Examples:
usernameValidation('aa_'); // => false
usernameValidation('u__hello_world123'); // => true

*/


// ****************************************************************************************************************** // 
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

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 6');

/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/
function evenOrNot(n) {
  return n % 2 === 0;
}
// OR 
function evenOrNot(n) {
  return !(n % 2);
}

/*
Examples:
evenOrNot(1) // => false
evenOrNot(2) // => true
evenOrNot(5) // => false
evenOrNot(99) // => false
evenOrNot(0) // => true
*/

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arr) {
  const newArr = arr.filter(e => e % 2).reduce((acc, e) => acc + e);
  return newArr;
}
// OR 
SumOddNumber = function (arr) {
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ) {
      sumOdd += arr[i];
    }
  }
  return sumOdd;
}
/*
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/

// ****************************************************************************************************************** // 
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
// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 9');

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s 
and 0s.
*/

function longestSequence(arr) {
  let newArr = arr.join('').split('0'), result = '';
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > result.length) {
      result = newArr[i];
    }
  }
  if (!result) return 'There is no one sequenced';
  return result.length;
}
// OR 
function longestSequence(arr) {
  let longest = Number.NEGATIVE_INFINITY, currentSequence = 0;
  arr.forEach((num) => {
    (num) ? currentSequence++ : ((currentSequence > longest) ? longest = currentSequence : longest, currentSequence = 0);
  });
  (currentSequence > longest) ? longest = currentSequence : longest;
  return (longest) ? longest : 'There is no one sequenced';
}

/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {
  let obj = {}, largFreq = 0;
  str.split('').forEach((e) => {
      obj[e] = obj[e] +1 || 1 ;
  })
  for (let k in obj) {
    if (obj[k] > largFreq) {
      largFreq = obj[k];
    }
  }
  return largFreq;
}
// OR 
function timesOfMostFreqChar(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    let c = 0;
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) c++;
    }
    if (c > result) result = c;
  }
  return result
}
/*
Examples:
timesOfMostFreqChar('hello world') // => 3
timesOfMostFreqChar('hello world lol') // => 5
timesOfMostFreqChar('hello world lol woooow') // => 7
timesOfMostFreqChar('hello world lol wow www.com') // => 6
*/

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 11');

/* Is Power Of Two */

/*  
Write a function that returns YES if a number is a power of 2, and NO otherwise.
*/

function isPowerOfTwo(n) {
    const x = Math.sqrt(n);
    return (Number.isInteger(x)) ? 'YES' : 'NO';
}
// OR 
function isPowerOfTwo(n) {
    if (typeof n !== 'number') return 'Not a number';
    return ((Math.log(n) / Math.log(2)) % 1 === 0) ? 'YES' : 'NO';
}

/*
Examples:
isPowerOfTwo(0) // => 'NO'
isPowerOfTwo(1) // => 'YES'
// I am sure not a typo 1 => YES

isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'NO'
isPowerOfTwo(24) // => 'NO'
isPowerOfTwo(25) // => 'NO'
isPowerOfTwo(28) // => 'NO'
isPowerOfTwo(32) // => 'YES'
isPowerOfTwo(63) // => 'NO'
isPowerOfTwo(64) // => 'YES'
isPowerOfTwo(1023) // => 'NO'
isPowerOfTwo(1024) // => 'YES'
*/

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
  const arr = str.split(' ').map((word) => word.split('').reverse().join(''));
  return arr.join(' ');
}

/*
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 13');

/* Largest Possible Sum */

/*  
Write a function that calculates the largest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/

function largestPossibleSum(arr, n) {
  let num = 0, temp_sum = 0;
  for (let i = 0; i < n - 1; i++) {
    temp_sum += arr[i];
  }
  for (let i = n - 1; i < arr.length; i++) {
    temp_sum += arr[i];
    if (temp_sum > num) {
      num = temp_sum;
    }
    temp_sum -= arr[i - n + 1];
  }
  return num;
}

/*
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
Examples:
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23

largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29


largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36
*/
// ****************************************************************************************************************** // 
console.log('Problem Solving Q:14 ');

/* ArrayCenter */

/*  
Given an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
  const mid = Math.ceil(arr.length / 2);
  const isEven = arr.length % 2 === 0;
  return isEven ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid-1];
};
/*
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
ArrayMiddle([2,3,2,6]) // => 2.5
*/

// ****************************************************************************************************************** // 
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
// ****************************************************************************************************************** // 
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
// ****************************************************************************************************************** // 
console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/
function firstNonRepeatedCharacter(str) {
  const obj = {};
  str.split('').forEach((e) => {
    obj[e] = obj[e] + 1 || 1;
  })
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  return null;
}
// OR
function firstNonRepeatedCharacter(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr[0];
}

/*
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
firstNonRepeatedCharacter('AA') // => 'U'
*/


// ****************************************************************************************************************** // 
console.log('Problem Solving Q:18 ');

/*  findFactorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function findFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * findFactorial(n - 1)
}
// OR 
function findFactorial(n) {
  let factor = 1;
  for (let i = 1; i <= n; i++) {
    factor *= i;
  }
  return factor;
}
/*
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
*/
// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 19');

/* Is Subset Of */

/*  
Make an array method that can return whether or not a context array is a subset of an input array.
To simplify the problem, you can assume that both arrays will contain only strings
*/

Array.prototype.isPartOf = function (array) {
  for (let item of this) {
    if (!array.includes(item)) {
      return false;
    }
  }
  return true;
};


/*
Examples:
[].isSubsetOf([1, 2, 2]) // => true
['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']) // => true
['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']) // => false
*/


// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
  let limit = 3, factor = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  for (let i = 0; i < limit; i++) {
    factor *= arr[i];
  }
  return factor;
}
// OR 
function largestProductOfThree(arr) {
  arr.sort((a, b) => b - a);
  return arr[0] * arr[1] * arr[2];
}
/*
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/

// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  const obj = {};
  let unique = '';
  str.split('').forEach((e) => {
    obj[e] = obj[e] + 1 || 1;
  })
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

// ****************************************************************************************************************** // 
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

// ****************************************************************************************************************** // 
console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, 
in the order that they appear.
If the url does not contain a query string, return undefined
*/

function parseQueryString(string) {
  const arrStr = string.split('%20').join(' ').split('?');
  if (arrStr.length > 1) {
    const arr = arrStr.pop().split('&');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
    }
    return arr;
  }
  return undefined;
}
// OR 
function getQueryString(url) {
  if (url.indexOf('?') === -1) return;
  let result = [];
  url
    .split(/[&?]/)
    .slice(1)
    .forEach(str => {
      let tuple = str.split('=');
      tuple[1] = decodeURIComponent(tuple[1]);
      result.push(tuple);
    });
  return result;
}
/*
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

// ****************************************************************************************************************** // 
console.log('Problem Solving Q:24 ');

/* findBubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element
of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/

function bubbleSort(arr) {
  let swapped = false;
  while (!swapped) {
    swapped = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = false;
      }
    }
  }
  return arr;
}

// OR 
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
/*
Examples:
bubbleSort([2, 1, 3, 7]) // => [7, 3, 2, 1]
bubbleSort([0, 2, 3]) // => [3, 2, 0]
bubbleSort([2, 3, 5]) // => [5, 3, 2]
bubbleSort([1, 3, 5, 4, 2]) // => [5, 4, 3, 2, 1]
*/
// ****************************************************************************************************************** // 
console.log('Problem Solving Q: 25');

/*array check   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

function is_array(input) {
  return Array.isArray(input);
}
// OR 
function is_array(input) {
  return toString.call(input) === "[object Array]";
};
/*
Examples:
is_array('w3resource') // => false
is_array ([1, 2, 4, 0]) // => true
*/

// ****************************************************************************************************************** // 
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

 
