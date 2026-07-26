const arr = [-1, 0, 1, 2, -1, -4]
// [-4, -1, -1, 0, 1, 2]

function threeSum(arr) {
    const length = arr.length
    if (length < 3) {
        return []
    }

    arr.sort((a, b) => a - b)
    const set = new Set()

    for (let i = 0; i <= length - 3; i++) {
        const currentValue = arr[i]
        let left = i + 1, right = length - 1

        while (left < right) {
            const sum = currentValue + arr[left] + arr[right]

            if (sum === 0) {
                set.add(JSON.stringify([currentValue, arr[left], arr[right]]))
                left += 1
                right -= 1
            } else if (sum < 0) {
                left += 1
            } else {
                right -= 1
            }
        }
    }

    let result = []
    set.forEach(value => {
        result.push(JSON.parse(value))
    })
    return result
}

console.log(
    threeSum(arr)
)