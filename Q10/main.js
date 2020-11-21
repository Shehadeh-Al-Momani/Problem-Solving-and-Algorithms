console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

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
