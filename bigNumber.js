let countStt = 1
const stt = 3

function findBiggest(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function findBigNumber(arr, max) {
    countStt += 1 //so lon thu 2 tro di
    let nextMax = -1
    if (countStt <= stt) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > nextMax && arr[i] < max) {
                nextMax = arr[i]
            }
        }
        return findBigNumber(arr, nextMax)
    }
    return max
}

const arr = [10, 7, 8, 9, 1, 5]
console.log(findBigNumber(arr, findBiggest(arr)))

// let countStt = 1
// const stt = 3

// function findMaxFrequent(arr) {
//     let count = 1, maxCount = 0
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             count += 1
//         } else {
//             if (count > maxCount) {
//                 maxCount = count
//             }
//             count = 1
//         }
//     }
//     return maxCount
// }

// function findFrequentNumber(arr, max) {
//     countStt += 1 // so xuat hien nhieu thu 2 tro di
//     let count = 1, maxCount = 0
//     if (countStt <= stt) {
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] === arr[i - 1]) {
//                 count += 1
//             } else {
//                 if (count > maxCount && count < max) {
//                     maxCount = count
//                 }
//                 count = 1
//             }
//         }
//         return findFrequentNumber(arr, maxCount)
//     }

//     return max
// }

// const arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4]
// const result = findFrequentNumber(arr, findMaxFrequent(arr))
// console.log(result)