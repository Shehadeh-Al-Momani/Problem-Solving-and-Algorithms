console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(arr) {
  let c1 = 0, c2 = 0;
  for (let i = 0; i < arr.length; i++) {
    c1 = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) c1++;
    }
    if (c1 > c2) c2 = c1;
  }
  return c2
}

/*
Examples:
timesOfMostFreqChar('hello world') // => 3
timesOfMostFreqChar('hello world lol') // => 5
timesOfMostFreqChar('hello world lol woooow') // => 7
timesOfMostFreqChar('hello world lol wow www.com') // => 6
*/
