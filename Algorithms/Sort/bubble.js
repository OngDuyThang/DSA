function bubbleSort(arr) {
    let lastIndex = arr.length - 1
    while (lastIndex > 0) {
        for (let i = 0; i < lastIndex; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
        lastIndex -= 1
    }
    return arr
}

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))