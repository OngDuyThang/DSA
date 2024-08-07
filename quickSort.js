// function partition(arr, start, end) {
//     const pivot = arr[end]
//     let index = start - 1
//     for (let i = start; i <= end - 1; i++) {
//         if (arr[i] < pivot) {
//             index += 1
//             let temp = arr[index]
//             arr[index] = arr[i]
//             arr[i] = temp
//         }
//     }
//     let temp = arr[index + 1]
//     arr[index + 1] = arr[end]
//     arr[end] = temp

//     return index + 1
// }

// function quickSort(arr, start, end) {
//     if (start < end) {
//         const pivotIndex = partition(arr, start, end)
//         quickSort(arr, start, pivotIndex - 1)
//         quickSort(arr, pivotIndex + 1, end)
//     }
// }

// const arr = [10, 7, 8, 9, 1, 5]
// quickSort(arr, 0, arr.length - 1)
// console.log(arr)




function partition(arr, start, end) {
    const pivot = arr[end]
    let index = start - 1
    for (let i = start; i <= end - 1; i++) {
        if (arr[i] < pivot) {
            index += 1
            let temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp
        }
    }
    let temp = arr[index + 1]
    arr[index + 1] = arr[end]
    arr[end] = temp

    return index + 1
}

function quickSort(arr, start, end) {
    if (start < end) {
        const pivotIndex = partition(arr, start, end)
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, end)
    }
}

const arr = [10, 7, 8, 9, 1, 5]
quickSort(arr, 0, arr.length - 1)
console.log(arr)