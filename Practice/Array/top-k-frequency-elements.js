const arr = [1, 2, 3, 1, 1, 2, 2]
const k = 2

function topKFrequencyElements(arr, k) {
    const map = new Map(), result = []

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 0)
        }
    }

    map.forEach((value, key) => result.push({
        key,
        value
    }))

    result.sort((obj1, obj2) => obj2.value - obj1.value)
    return result.slice(0, k).map(obj => obj.key)
}

console.log(
    topKFrequencyElements(arr, k)
)