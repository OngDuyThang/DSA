function selectionSort(arr) {
    let minIndex = 0
    let firstIndex = 0

    while (firstIndex < arr.length - 1) {
        for (let i = firstIndex; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i
            }
        }
        const temp = arr[firstIndex]
        arr[firstIndex] = arr[minIndex]
        arr[minIndex] = temp

        firstIndex += 1
        minIndex = firstIndex
    }

    return arr
}

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))