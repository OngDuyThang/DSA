// O(n * log(n))
function maxConcurrentLearners(input) {
    let timeline = input
        .map((item) => [
            [item[1], +1, item[0]], // [start, 1, userId]
            [item[2], -1, item[0]] // [end, -1, userId]
        ]).flat().sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]))

    let count = 0, max = 0
    let temp = new Set(), learners

    for (let i = 0; i < timeline.length; i++) {
        count += timeline[i][1]

        if (timeline[i][1] == 1) {
            temp.add(timeline[i][2])
        } else {
            temp.delete(timeline[i][2])
        }

        if (count > max) {
            max = count
            learners = Array.from(temp.values())
        }
    }

    return [max, learners]
}

const [max, learners] = maxConcurrentLearners([
    ["User_001", 0, 1000],
    ["User_002", 500, 2000],
    ["User_003", 2500, 3000],
    ["User_004", 400, 1400]
])
console.log(max, learners)