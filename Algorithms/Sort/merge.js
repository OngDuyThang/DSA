function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const midIndex = Math.floor(arr.length / 2)
    const left = arr.slice(0, midIndex)
    const right = arr.slice(midIndex)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let sortedArr = []
    let i = 0, j = 0
    while (sortedArr.length < left.length + right.length) {
        if (left[i] < right[j] || !right[j]) {
            sortedArr.push(left[i])
            i += 1
        } else {
            sortedArr.push(right[j])
            j += 1
        }
    }
    return sortedArr
}

console.log(mergeSort([0, 3, 4, 31, 4, 6, 30]))