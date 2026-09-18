function peakTimeWindow(input) {
    let timeline = input
        .map((item) => [
            [item[1], +1, item[0]],
            [item[2], -1, item[0]]
        ])
        .flat().sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]))


    let count = 0
    let points = [] // [[time, count], ...]
    for (let i = 0; i < timeline.length; i++) {
        count += timeline[i][1]
        points.push([
            timeline[i][0],
            count
        ])
    }

    let max = Math.max(...points.map((item) => item[1]))
    let peakIndex = points.findIndex((item) => item[1] == max)

    let startTime = points[peakIndex][0]
    let endTime = peakIndex + 1 < points.length ? points[peakIndex + 1][0] : startTime

    return {
        max,
        startTime,
        endTime
    }
}

const output = peakTimeWindow(
    [["User_001", 0, 1000], ["User_002", 500, 2000], ["User_003", 2500, 3000]]
)
console.log(output)