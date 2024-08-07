function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentIndex = i
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[currentIndex]) {
                const temp = arr[j]
                arr[j] = arr[currentIndex]
                arr[currentIndex] = temp
                currentIndex = j
            }
        }
    }
    return arr
}

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
// 44 6 99