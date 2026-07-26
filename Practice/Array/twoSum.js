const arr = [2, 5, 7, 11]
const sum = 9

function twoSum(arr, sum) {
    let map = new Map()

    for (let i = 0; i < arr.length; i++) {
        const remain = sum - arr[i]
        if (!map.has(remain)) {
            map.set(remain, i)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]) && map.get(arr[i]) !== i) {
            return [map.get(arr[i]), i]
        }
    }
}

console.log(
    twoSum(arr, sum)
)