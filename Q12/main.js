console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
  const arr = str.split(' '), newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('').reverse().join(''));
  }
  return newArr.join(' ');
}

/*
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
