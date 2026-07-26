const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

function containerWithMostWater(arr) {
    const length = arr.length
    if (length < 2) {
        return 0
    }

    let left = 0, right = length - 1
    let max = 0
    while (left < right) {
        max = Math.max(
            (right - left) * Math.min(arr[left], arr[right]),
            max
        )

        if (arr[left] < arr[right]) {
            left += 1
        } else {
            right -= 1
        }
    }

    return max
}

console.log(
    containerWithMostWater(arr)
)