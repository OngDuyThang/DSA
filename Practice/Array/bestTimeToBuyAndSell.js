const arr = [7, 1, 5, 3, 6, 4]

function bestTimeToBuyAndSell(arr) {
    if (arr.length < 2) {
        return 0
    }

    let min = arr[0], bestProfit = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - min > bestProfit) {
            bestProfit = arr[i] - min
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return bestProfit
}

console.log(
    bestTimeToBuyAndSell(arr)
)