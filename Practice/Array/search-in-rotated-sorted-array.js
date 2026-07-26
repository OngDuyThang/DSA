const arr = [1, 3]

function searchInRotatedSortedArray(arr, target) {
    let leftIndex = 0, rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((rightIndex + leftIndex) / 2)
        let left = arr[leftIndex], mid = arr[midIndex]

        if (mid === target) {
            return midIndex
        }

        if (leftIndex == rightIndex) {
            return -1
        }

        if (left <= mid) {
            if (target >= left && target < mid) {
                rightIndex = midIndex - 1
            } else {
                leftIndex = midIndex + 1
            }
        }
        if (left > mid) {
            if (target >= left || target < mid) {
                rightIndex = midIndex - 1
            } else {
                leftIndex = midIndex + 1
            }
        }
    }
}

console.log(
    searchInRotatedSortedArray(arr, 0)
)

// [4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3]

// [7, 8, 9, 1, 2, 3, 4, 5, 6]

// if (left < right) {
//     if (target < mid) {
//         // move left
//     }
//     if (target > mid) {
//         // move right
//     }
// }

// if (left > right) {
//     if (left < mid) {
//         if (target < mid) {
//             // move left
//         }
//         if (target > mid) {
//             // move right
//         }
//     }
//     if (left > mid) {
//         if (target >= left || target < mid) {
//             // move left
//         }
//         if (target < left && target > mid) {
//             // move right
//         }
//     }
// }