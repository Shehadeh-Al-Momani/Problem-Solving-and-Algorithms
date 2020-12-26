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

