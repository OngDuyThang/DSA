function searchSortedArray(arr, value) {
    if (arr.length <= 1) {
        if (arr[0] === value) {
            return arr[0]
        }
        return null
    }

    const mid = Math.floor(arr.length / 2)
    if (value < arr[mid]) {
        const left = arr.slice(0, mid)
        return searchSortedArray(left, value)
    } else {
        const right = arr.slice(mid)
        return searchSortedArray(right, value)
    }
}

console.log(searchSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))