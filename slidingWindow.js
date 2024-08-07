// function findMaxSumOfSubArray(arr, k) {
//     let maxSum = 0
//     for (let i = 0; i < k; i++) {
//         maxSum += arr[i]
//     }
//     let window = maxSum
//     for (let i = k; i < arr.length; i++) {
//         window += arr[i] - arr[i - k]
//         if (window > maxSum) {
//             maxSum = window
//         }
//     }
//     return maxSum
// }

// const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
// console.log(findMaxSumOfSubArray(arr, 4))

// function findLongestSubStringNotRepeat(str) {
//     let checkArray = new Array(256).fill(false)
//     let start = 0, end = 0
//     let countLength = 0, maxLength = 0

//     while (end < str.length) {
//         if (checkArray[str.charCodeAt(end)]) {
//             if (countLength > maxLength) {
//                 maxLength = countLength
//             }
//             countLength = 0
//             while (start < end) {
//                 checkArray[str.charCodeAt(start)] = false
//                 start += 1
//             }
//         }
//         checkArray[str.charCodeAt(end)] = true
//         countLength += 1
//         end += 1
//     }

//     return maxLength
// }

// console.log(findLongestSubStringNotRepeat("geeksforgeeks"))

function findMaxSumOfSubArrayNotRepeat(arr, k) {
    let checkArray = new Array(10).fill(false)
    let maxSum = 0
    let start = 0, end = 0

    while (end < arr.length) {
        if (checkArray[arr[end]]) {
            maxSum = 0
            const temp = start
            while (start <= end) {
                checkArray[arr[end]] = false
                start += 1
            }
            end = temp + 1
            start = end
        }

        checkArray[arr[end]] = true
        maxSum += arr[end]
        if (end - start + 1 === k) {
            break
        }
        end += 1
    }

    let window = maxSum
    for (let i = end; i < arr.length; i++) {
        if (!checkArray[arr[i]]) {
            window += arr[i] - arr[i - k]
            checkArray[arr[i]] = true
            checkArray[arr[i - k]] = false
            if (window > maxSum) {
                maxSum = window
            }
        }
    }

    return maxSum
}

console.log(findMaxSumOfSubArrayNotRepeat([1, 5, 1, 2, 9, 9, 9], 3))