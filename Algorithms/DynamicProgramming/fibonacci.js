let count = 0
function fibonacci() {
    let cache = {}
    return function inner(n) {
        if (cache[n]) {
            return cache[n]
        } else {
            count += 1
            if (n < 2) {
                return n
            }
            cache[n] = inner(n - 1) + inner(n - 2)
            return cache[n]
        }
    }
}
const run = fibonacci()
console.log(run(8))
console.log(count)