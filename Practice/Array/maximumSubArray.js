const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maximumSubArray(arr) {
    let currentSum = 0, max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] >= arr[i]) {
            currentSum += arr[i] // extend sub array if plus arr[i] greater than start new array
        } else {
            currentSum = arr[i] // start new sub array from arr[i]
        }

        if (currentSum > max) {
            max = currentSum
        }
    }

    return max
}

console.log(
    maximumSubArray(arr)
)