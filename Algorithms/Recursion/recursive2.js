// let a = 0, b = 1
// function fibonacci(number) {
//     if (a + b === number) {
//         return `${a} + ${b}`
//     }
//     if (a + b > number) {
//         return null
//     }
//     const temp = a
//     a = b
//     b += temp
//     return fibonacci(number)
// }

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// function fibonacci(n) {
//     let arr = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }

//     return arr[n]
// }

console.log(fibonacci(8))