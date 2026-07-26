const arr = [-2, 0, -4]

function maximumProductSubArray(arr) {
    const length = arr.length
    let leftCurrent = 1, rightCurrent = 1
    let leftMax = arr[0], rightMax = arr[length - 1]

    for (let i = 0; i < length; i++) {
        leftCurrent *= arr[i]
        leftMax = Math.max(leftCurrent, leftMax) // leftMax represent greatest sub array in left, 
        // before changing the whole value to negative when meet the first negative (even negative assume as positive)
        if (arr[i] === 0) {
            leftCurrent = 1
        }

        rightCurrent *= arr[length - 1 - i]
        rightMax = Math.max(rightCurrent, rightMax) // similar to leftMax, 
        // need to loop in right direction because when current left change to negative, 
        // leftMax will ignore the whole remain values after that first one negative, 
        // so we need to loop in right to make sure no remain values missed
        if (arr[length - 1 - i] === 0) {
            rightCurrent = 1
        }
    }

    return Math.max(leftMax, rightMax)
}

console.log(
    maximumProductSubArray(arr)
)