// function findFactorial(number) {
//     let res = 1
//     for (let i = 1; i <= number; i++) {
//         res *= i
//     }
//     return res
// }

// let res = 1
function findFactorial(number) {
    if (number === 1) {
        return 1
    }
    return findFactorial(number - 1) * number
}

console.log(findFactorial(5))