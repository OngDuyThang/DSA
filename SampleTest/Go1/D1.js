function getTopKNextCourse(input, k) {
    let courseId, nextCourseId
    let map = new Map(), innerMap

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {
            courseId = input[i][j]
            nextCourseId = input[i][j + 1]

            if (!map.has(courseId)) {
                map.set(courseId, new Map().set(nextCourseId, 1))
            } else {
                innerMap = map.get(courseId)
                innerMap.set(
                    nextCourseId,
                    (innerMap.get(nextCourseId) ?? 0) + 1
                )
            }
        }
    }

    let result = {}

    for (let [courseId, innerMap] of map.entries()) {
        for (let [nextCourseId, count] of innerMap.entries()) {
            if (result[courseId] == undefined) {
                result[courseId] = [[nextCourseId, count]]
            } else {
                result[courseId].push([nextCourseId, count])
            }
        }
    }

    for (let [courseId, arr] of Object.entries(result)) {
        result[courseId] = arr.sort((a, b) => b[1] - a[1]).slice(0, k).map((item) => item[0])
    }

    return result
}

const output = getTopKNextCourse(
    [
        ["Course_001", "Course_002", "Course_003", "Course_004"],
        ["Course_001", "Course_003"],
        ["Course_002", "Course_004", "Course_001"],
        ["Course_004", "Course_002", "Course_003", "Course_001"],
        ["Course_004", "Course_003", "Course_002", "Course_001"]
    ],
    3
)
console.log(output)