const arr = [2, 7, 11, 15]
const target = 9

function twoSumSorted(arr, target) {
    let length = arr.length
    let left = 0, right = length - 1

    while (left < right) {
        const sum = arr[left] + arr[right]

        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
}

console.log(
    twoSumSorted(arr, target)
)