const arr = [2, 5, 5, 4, 2, 5, 6, 5]
const obj = {}
function firstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            return arr[i]
        }
        obj[arr[i]] = true
    }
    return undefined
}
console.log(firstDuplicate(arr))