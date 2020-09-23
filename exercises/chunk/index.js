// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION # 1
//function chunk(array, size) {
//    let chunked = [] //new array that holds chunks of the array aka, creating the array that holds the subarrays

//    for (let element of array){ //iterate through the given array
//        const last = chunked[chunked.length - 1]     //get last subarray from the chunked array
//         if (!last || last.length === size) {        //if the last subarray does not exist, or if the length of that subarray is already equal to the size declared in the parameters
//             chunked.push([element])                 //push the subarray with the element included into the chunked array
//         } else {
//             last.push(element)                      //push just the element into the last subarray
//         }
//    }
   
//    return chunked
// }

function chunk(array, size) {
    let chunked = [] //new array that holds chunks of subarrays
    let index = 0    //starting index value to slice from

    while (index < array.length) {  //while the index value is less than the array length
        chunked.push(array.slice(index, index + size)) //push the slice of subarray into the chunk array, starting from index to index + the size
        index += size //increment index by size
    }

    return chunked

}

module.exports = chunk;
