function getMaxConcurrentLearnersPerCourse(input) {
    let timeline = input
        .map((item) => [
            [item[2], +1, item[0], item[1]],
            [item[3], -1, item[0], item[1]]
        ])
        .flat().sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]))

    let result = {}, courseId
    let temp = {}

    for (let i = 0; i < timeline.length; i++) {
        courseId = timeline[i][3]

        temp[courseId] = (temp[courseId] ?? 0) + timeline[i][1]
        result[courseId] = Math.max(temp[courseId], (result[courseId] ?? 0))
    }

    return result
}

const output = getMaxConcurrentLearnersPerCourse(
    [["User_001", "Course_A", 0, 1000], ["User_002", "Course_A", 500, 1500], ["User_003", "Course_B", 0, 500]]
)
console.log(output)