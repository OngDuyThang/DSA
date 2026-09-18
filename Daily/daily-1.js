// Given two strings of the same length, determine the number of moves to transform one string into the other.
// Each letter can be transformed either forward or backward through the alphabet. 
// The letters are circular, so 'a' can become 'z' in one move, and 'z' can become 'a' in one move.

const str1 = 'abbdadeeab'
const str2 = 'efbeccbboj'

// function calcSmallestDistance(str1, str2) {
//     const len = str1.length || str2.length
//     let sum = 0
//     for (let i = 0; i < len; i++) {
//         const charCode1 = str1.charCodeAt(i) - 96
//         const charCode2 = str2.charCodeAt(i) - 96

//         const leftDistance = Math.abs(charCode1 - charCode2)
//         const rightDistance =
//             Math.abs(Math.max(charCode1, charCode2) - leftDistance) +
//             Math.abs(26 - Math.max(charCode1, charCode2))

//         sum += Math.min(leftDistance, rightDistance)
//     }
//     return sum
// }

console.log(calcSmallestDistance(str1, str2))

function calcSmallestDistance(str1, str2) {
    const len = str1.length || str2.length
    let sum = 0
    for (let i = 0; i < len; i++) {
        const charCode1 = str1.charCodeAt(i) - 96
        const charCode2 = str2.charCodeAt(i) - 96

        const leftDistance = Math.abs(charCode1 - charCode2)
        const rightDistance = Math.abs(26 - leftDistance)

        sum += Math.min(leftDistance, rightDistance)
    }
    return sum
}
