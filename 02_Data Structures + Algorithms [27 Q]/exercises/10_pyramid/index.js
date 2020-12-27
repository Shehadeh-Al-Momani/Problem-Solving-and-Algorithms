// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= (n - i); k++) {
            result += " ";
        }
        for (let j = 1; j <= i; j++) {
            result += "# ";
        }
        result += "\n";
    }
    console.log(result)
}

// OR 
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= (2 * n - 1); j++) {
            (j >= n + 1 - i && j <= n - 1 + i) ? result += "#" : result += " ";
        }
        console.log(result);
    }
}
module.exports = pyramid;

