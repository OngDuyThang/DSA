function performOperations(arr, operations) {
    // Write your code here
    let result = [...arr]
    let left = [], right = [], toReverse = []
    for (let i = 0; i < operations.length; i++) {
        const first = operations[i][0]
        const second = operations[i][1]
        for (let j = 0; j < result.length; j++) {
            if (result[j] >= first && result[j] <= second) {
                toReverse.push(result[j])
            }
            if (result[j] < first) {
                left.push(result[j])
            }
            if (result[j] > second) {
                right.push(result[j])
            }
        }
        toReverse.reverse()
        result = [...left, ...toReverse, ...right]
        left = []
        right = []
        toReverse = []
        console.log('result', result)
    }
    return result
}
console.log(performOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], [[0, 9], [4, 5], [3, 6], [2, 7], [1, 8], [0, 9]]))