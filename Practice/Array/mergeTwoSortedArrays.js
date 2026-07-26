const a = [1, 4, 5, 8, 11]
const b = [3, 5, 7, 9, 22]

function mergeTwoSortedArrays(a, b) {
    let result = []
    let first = 0, second = 0

    while (a[first] || b[second]) {
        if (a[first] <= b[second] || b[second] === undefined) {
            result.push(a[first])
            first += 1
        }
        if (a[first] >= b[second] || a[first] === undefined) {
            result.push(b[second])
            second += 1
        }
    }

    return result
}

console.log(
    mergeTwoSortedArrays(a, b)
)