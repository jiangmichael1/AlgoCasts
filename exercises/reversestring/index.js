// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1

function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('')
}

// Solution #2

// function reverse(str) {
//     let reversedString = ''
//     for (let character of str) {
//         reversedString = character + reversedString
//     }
//     return reversedString
// }

// // Solution #3

// function reverse(str){
//     return str
//         .split('')
//         .reduce((reversedString, character) => character + reversedString, '') 
// }
    
    //reduce is used to condense all the values in an array to a single value
    //reduce takes in two arguments, an arrow function, and the starting initial value
    module.exports = reverse;
