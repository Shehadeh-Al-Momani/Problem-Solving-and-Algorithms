// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let result = '';
    for (let letter of str) {
        result = letter + result
    }
    return result;
}

// OR Reverse a string using built-in methods
// function reverse(str) {
//     return (typeof str === "string") ? [...str].reverse().join('') : str.reverse();
// }

// OR Reverse a string using stack
// class Stack {
//     constructor() {
//         this.data = [];
//         this.top = 0;
//     }

//     push(value) {
//         this.data[this.top++] = value;
//     }

//     pop() {
//         if (!this.isEmpty()) {
//             return this.data[--this.top];
//         }
//     }

//     peek() {
//         return this.data[this.top - 1];
//     }

//     size() {
//         return this.top;
//     }

//     clear() {
//         return this.top = 0;
//     }

//     isEmpty() {
//         return this.top === 0;
//     }
// }
// let reverse = (str) => {
//     let stack = new Stack();
//     for (let char of str) {
//         stack.push(char);
//     }
//     let reversed = '';
//     while (!stack.isEmpty()) {
//         reversed += stack.pop();
//     }
//     return reversed;
// }
module.exports = reverse;

