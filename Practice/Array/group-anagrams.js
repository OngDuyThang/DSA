const arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams(arr) {
    const length = arr.length
    const map = new Map(), result = []

    for (let i = 0; i < length; i++) {
        const str = arr[i]
        const frequency = new Array(26).fill(0)

        for (let j = 0; j < str.length; j++) {
            const charCode = str.charCodeAt(j)
            frequency[charCode - 97] += 1
        }
        const hashKey = frequency.join('-')

        if (map.has(hashKey)) {
            const value = map.get(hashKey)
            value.push(str)

            map.set(hashKey, value)
        } else {
            map.set(hashKey, [str])
        }
    }

    map.forEach((value) => result.push(value))
    return result
}

console.log(
    groupAnagrams(arr)
)

// Sort n * k * log(k) solution:

// function groupAnagrams(arr) {
//     const length = arr.length
//     const map = new Map(), result = []

//     for (let i = 0; i < length; i++) {
//         const str = arr[i]
//         const sorted = str.split('').sort().join('')

//         if (map.has(sorted)) {
//             const value = map.get(sorted)
//             value.push(str)

//             map.set(sorted, value)
//         } else {
//             map.set(sorted, [str])
//         }
//     }

//     map.forEach((value) => result.push(value))
//     return result
// }