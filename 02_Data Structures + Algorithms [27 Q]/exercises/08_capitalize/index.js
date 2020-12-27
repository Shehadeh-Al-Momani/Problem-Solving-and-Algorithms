// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    str = str.split(" ");
    const arrString = [];
    for (let i = 0; i < str.length; i++) {
        let word = str[i].split("");
        word[0] = word[0].toUpperCase();
        arrString.push(word.join(''));
    }
    return arrString.join(" ");
};

// OR
function capitalize(str) {
    return str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

module.exports = capitalize;


