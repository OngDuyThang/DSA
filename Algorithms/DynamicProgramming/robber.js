function rob(arr) {
    let result = [arr[0], Math.max(arr[0], arr[1])]
    if (arr.length <= 2) {
        return result[arr.length - 1]
    }
    for (let i = 2; i < arr.length; i++) {
        result.push(Math.max(arr[i] + result[i - 2], result[i - 1]))
    }
    return result[result.length - 1]
}
console.log(rob([2, 7, 9, 3, 1]))