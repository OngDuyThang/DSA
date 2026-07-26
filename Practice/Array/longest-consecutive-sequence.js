const arr = [-8, -4, 9, 9, 4, 6, 1, -4, -1, 6, 8]

function longestConsecutiveSequence(arr) {
    const length = arr.length
    if (!length) { return 0 }

    const set = new Set(arr)
    const startPoints = []

    set.forEach((num) => {
        if (!set.has(num - 1)) {
            startPoints.push(num)
        }
    })

    let currentStartPointIndex = 0
    let temp = startPoints[currentStartPointIndex]
    let currentMax = 1, max = 1

    for (let i = 0; i < set.size; i++) {
        if (set.has(temp + 1)) {
            currentMax += 1
            temp += 1
        } else {
            max = Math.max(currentMax, max)
            currentMax = 1

            currentStartPointIndex += 1
            temp = startPoints[currentStartPointIndex]
        }
    }

    return max
}

console.log(
    longestConsecutiveSequence(arr)
)