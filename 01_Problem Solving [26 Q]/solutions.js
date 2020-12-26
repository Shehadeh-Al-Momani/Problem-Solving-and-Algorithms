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
  for (let i = 0; i < sen.length; i++) {
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
function FindIntersection(strArr) {

  let arrOne = strArr[0].split(", ");
  let arrTwo = strArr[1].split(", ");

  let result = [];

  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.indexOf(arrOne[i]) !== -1) {
      result.push(arrOne[i]);
    }
  }

  result = result.length > 0 ? result.join() : false;
  // code goes here  
  return result;

}
/* Q6: Even or Not */
function isEven(n) {
  return n % 2 == 0;
}
/* Q7: Sum Array Odd */
sumArrayOdd = function (arr) {
  var odd = 0;
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] % 2 != 0) {
      odd = odd + arr[i]
    }

  }

  return odd

}
/* Q8: Unique Item */
unique = function (arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {

    if (obj[arr[i]] >= 0) {
      obj[arr[i]] = obj[arr[i]] + 1
    } else {
      obj[arr[i]] = 1

    }
  }

  return Object.keys(obj).length

}
/* Q9: Longest Sequence */
function answer(arr) {
  let longest = Number.NEGATIVE_INFINITY;
  let currentLongest = 0;
  // Write your code here
  arr.forEach((num) => {
    if (num !== 1) {
      if (currentLongest > longest) {
        longest = currentLongest;
      }
      currentLongest = 0;
    } else {
      currentLongest += 1;
    }
  });
  if (currentLongest > longest) {
    longest = currentLongest;
  }
  return longest;
}

/* Q10: Times Of Most Freq Char */
function answer1(sentence) {
  // Write your code here
  let obj = {};
  sentence.split('').forEach((char) => {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  });
  console.log(obj);
  let freqCharTimes = Number.NEGATIVE_INFINITY;​
  for (const char in obj) {
    if (obj[char] > freqCharTimes) {
      freqCharTimes = obj[char];
    }
  }
  return freqCharTimes;
}
/* Q11: Is Power Of Two */
function powerOfTwo(x) {
  if (typeof n !== 'number')
    return 'Not a number';
  return (Math.log(x) / Math.log(2)) % 1 === 0;
}
/* Q12: Reverse Each Word */
function answer(sentence) {
  // Write your code here
  let arrayOfReverseWord = sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''));
  return arrayOfReverseWord.join(' ');
}
/* Q13: findHighestPossibleSum */
function answer1(arr, n) {
  // Write your code here
  let largestSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let currentN = 0;
  // debugger;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    currentSum += num;
    currentN += 1;
    if (currentN === n) {
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
      if (i != arr.length - 1) {
        i -= n - 1;
      }
      currentN = 0;
      currentSum = 0;
    }
  }
  if (largestSum === Number.NEGATIVE_INFINITY) {
    return 0;
  }
  return largestSum;
}
/* Q14:  */
const ArrayCenter = numbers => {
  const mid = Math.floor(numbers.length / 2);
  const isEven = numbers.length % 2 === 0;
  return isEven ? (numbers[mid] + numbers[mid - 1]) / 2 : numbers[mid];
};
/* Q15:  */
var evenAppearance = function (string1, string2) {
  let result = '';
  for (let ch of string1) {
    if (string2.includes(ch) && !result.includes(ch) && ch !== ' ') {
      result += ch;
    }
  }
  return result;
};
/* Q16:  */
function evenAppearance(array) {
  var storage = {};
  array.forEach(function (value, index) {
    storage[value] = storage[value] + 1 || 1;
  });
  for (var i = 0; i < array.length; i++) {
    var current = array[i];

    if (storage[current] % 2 === 0) {
      return current;
    }
  }
  return null;
}
/* Q17:  */
function mapChars(string) {
  const map = {};
  for (let char of string) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

function findFirstNonIterativedCharacter(string) {
  const map = mapChars(string);
  for (let char of string) {
    if (map[char] === 1) return char;
  }
  return 'sorry';
}
/* Q18:  */
function findFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
/* Q19:  */
Array.prototype.isPartOf = function (array) {
  for (let item of this) {
    if (!array.includes(item)) {
      return false;
    }
  }
  return true;
};
/* Q20:  */
function MaximumProductOfThree(array) {
  array.sort((a, b) => b - a);
  const product1 = array[0] * array[1] * array[2];
  const product2 = array[0] * array[array.length - 1] * array[array.length - 2];
  return Math.max(product1, product2);
}
/* Q21:  */
function removeNotUnique(str) {
  const map = countChars(str);
  let output = '';
  for (let char of str) {
    if (map[char] === 1) {
      output += char;
    }
  }
  return output;
}

function countChars(str) {
  const map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}
/* Q22:  */
var characterRecurrence = function (inputStr) {
  var result = [],
    charCounts = {};

  for (var i = 0; i < inputStr.length; i++) {
    charCounts[inputStr[i]] = charCounts[inputStr[i]] ? charCounts[inputStr[i]] + 1 : 1;
  }
  console.log(charCounts);

  for (key in charCounts) {
    charPair = [];
    charPair[0] = key;
    charPair[1] = charCounts[key];
    result.push(charPair);
  }
  return result;
}
/* Q23:  */
function getQueryString(url) {
  if (url.indexOf('?') === -1) return;
  let result = [];
  // using regular expression to split on both '&' and '?'
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
/* Q24:  */
function findBubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // swap the elements using es6 array destructuring
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
/* Q25:  */
var array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;
};
/* Q26:  */
var array_Copy = function (arra1) {
  return arra1.slice(0);
};
/* Q27:  */
/* Q28:  */
/* Q29:  */
/* Q30:  */
/* Q31:  */
/* Q32:  */
/* Q33:  */
/* Q34:  */



uniqueItems2([1, 1, 1, 1, 1]);