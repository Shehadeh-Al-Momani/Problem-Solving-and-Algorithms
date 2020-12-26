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

