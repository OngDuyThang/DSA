const arr = [1, 2, 3, 4]

function productOfArrayExceptSelf(arr) {
    const length = arr.length
    const result = new Array(length)
    let temp = 1

    for (let i = 0; i < length; i++) {
        if (arr[i - 1] === undefined) {
            result[i] = 1
            continue
        }
        temp *= arr[i - 1]
        result[i] = temp
    }

    temp = 1
    for (let i = length - 1; i >= 0; i--) {
        if (arr[i + 1] === undefined) {
            result[i] *= 1
            continue
        }
        temp *= arr[i + 1]
        result[i] *= temp
    }

    return result
}

console.log(productOfArrayExceptSelf(arr))
