function stairSteps(n) {
    let result = [1, 2]
    if (n <= 2) {
        return result[n - 1]
    }
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[result.length - 1]
}

console.log(stairSteps(6))