// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxValue = 0
    let maxChar = ''

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    } //if the character has a value already, add one - else if character = nil, set it to 1
    
    for (let char in charMap) {
        if (charMap[char] > maxValue) {
            maxChar = char
            maxValue = charMap[char]
        }
    }

    return maxChar
}

module.exports = maxChar;
