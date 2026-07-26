const arr = [8, -8] //[-1, 8, 5, -7, 3, -2]
//[-1, 8, 3]

function asteroidCollision(arr) {
    const length = arr.length
    const stack = []

    for (let i = 0; i < length; i++) {
        let item = arr[i]

        if (item < 0) {
            while (stack[stack.length - 1] > 0) {
                const latest = stack[stack.length - 1]
                const absItem = Math.abs(item)

                if (latest > absItem) {
                    item = undefined
                    break
                } else if (latest == absItem) {
                    item = undefined
                    stack.pop()
                    break
                } else {
                    stack.pop()
                }
            }
        }

        if (item != undefined) {
            stack.push(item)
        }
    }

    return stack
}

console.log(
    asteroidCollision(arr)
)