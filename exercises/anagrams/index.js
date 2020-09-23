// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION #1

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false 
//     } 
    
//     for (let char in aCharMap) { //remember to use IN for iterating through objects
//         if (aCharMap[char] !== bCharMap[char]){
//             return false
//         }
//     }

//     return true
// }

// function buildCharMap(string) {
//     const charMap = {}
    
//     for (let char of string.replace(/[^\w]/g,'').toLowerCase()) { //use OF to iterate through an array
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     return charMap
// }

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB) 
}

function cleanString(string){
    return string
        .replace(/[^\w]/g,'')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

module.exports = anagrams;
