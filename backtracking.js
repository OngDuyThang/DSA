// const x = 8
// let result = []

// function findCombinationNumbers(arr, index, tempArr, sum) {
//     if (sum === 0) {
//         result.push([...tempArr])
//         return
//     }
//     for (let i = index; i < arr.length; i++) {
//         if (sum - arr[i] >= 0) {
//             tempArr.push(arr[i])
//             findCombinationNumbers(arr, i, tempArr, sum - arr[i])
//             tempArr.splice(tempArr.indexOf(arr[i]), 1)
//         }
//     }
// }

// let tempArr = []
// findCombinationNumbers([2, 4, 6, 8], 0, tempArr, x)
// console.log(result)

let result = []

function swappedArray(arr, left, i) {
    const temp = arr[left]
    arr[left] = arr[i]
    arr[i] = temp
    return arr
}

function findPermutations(arr, left, right) {
    if (left === right) {
        result.push([...arr])
        return
    }
    for (let i = left; i <= right; i++) {
        arr = swappedArray(arr, left, i)
        findPermutations(arr, left + 1, right)
        arr = swappedArray(arr, left, i)
    }
}

findPermutations([1, 2, 3], 0, 2)
console.log(result)