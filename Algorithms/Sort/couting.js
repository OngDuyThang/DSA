function countingSort(arr) {
    let first = arr[0]
    let last = arr[arr.length - 1]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            first = arr[i]
        }
        if (arr[i] > last) {
            last = arr[i]
        }
    }

    let frequency = new Array(last + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] += 1
    }

    let result = []
    for (let i = first; i <= last; i++) {
        while (frequency[i] > 0) {
            result.push(i)
            frequency[i] -= 1
        }
    }
    return result
}
console.log(countingSort([18, 73, 55, 59, 37, 13, 1, 33]))