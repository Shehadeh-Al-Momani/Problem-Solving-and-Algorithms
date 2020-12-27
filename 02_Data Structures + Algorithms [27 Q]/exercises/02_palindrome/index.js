// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let result = '';
    for (let letter of str) {
        result = letter + result
    }
    return str === result;
}
// OR 
// function palindrome(str) {
//     return [...str].reverse().join('') === str;
// }

module.exports = palindrome;
