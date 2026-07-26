const arr = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3

function slidingWindowMaximum(arr, k) {
    const length = arr.length
    const deque = [], result = []
    let leftIndex = 0, rightIndex = 0

    while (rightIndex <= length) {
        if (rightIndex === length) {
            result.push(deque[0])
            break
        }

        const left = arr[leftIndex], right = arr[rightIndex]

        if (rightIndex - leftIndex === k) {
            result.push(deque[0])

            if (left === deque[0]) {
                deque.shift()
            }
            leftIndex += 1
        }

        while (deque[deque.length - 1] < right) {
            deque.pop()
        }
        deque.push(right)

        rightIndex += 1
    }

    return result
}

console.log(
    slidingWindowMaximum(arr, k)
)