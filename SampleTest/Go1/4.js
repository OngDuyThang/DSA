// O(n * m), with n = total leaner sessions, m = number of courses in each session
// O(n) with n = total of courses across sessions
function mostWatchNextCourse(input) {
    let map = new Map(), temp
    let courseId, nextCourseId

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {
            courseId = input[i][j]
            nextCourseId = input[i][j + 1]

            if (!map.has(courseId)) {
                map.set(courseId, new Map().set(nextCourseId, 1))
            } else {
                temp = map.get(courseId)
                temp.set(
                    nextCourseId,
                    (temp.get(nextCourseId) ?? 0) + 1
                )
            }
        }
    }

    let max, result = {}

    for (let [courseId, innerMap] of map.entries()) {
        max = 0
        for (let [nextCourseId, count] of innerMap.entries()) {
            if (count > max) {
                max = count
                result[courseId] = nextCourseId
            }
        }
    }

    return result
}

const output = mostWatchNextCourse([
    ["Course_001", "Course_002", "Course_003", "Course_004"],
    ["Course_001", "Course_003"],
    ["Course_002", "Course_004", "Course_001"],
    ["Course_004", "Course_002", "Course_003", "Course_001"],
    ["Course_004", "Course_003", "Course_002", "Course_001"]
])
console.log(output)