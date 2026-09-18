// O(n * m), with n = total of learners, m = courses completed of each learner
// O(n), with n = total of course ids
function getCoursesCompleteByOneLearner(input) {
    const map = new Map()
    for (let learnerId in input) {
        for (let courseId of input[learnerId]) {
            map.set(
                courseId,
                (map.get(courseId) ?? 0) + 1
            )
        }
    }
    return Array.from(map.keys()).filter((courseId) => map.get(courseId) === 1)
}

// function getCoursesCompleteByOneLearner(input) {
//     let map = new Map()

//     for (let learnerId in input) {
//         for (let courseId of input[learnerId]) {
//             if (!map.has(courseId)) {
//                 map.set(courseId, [learnerId])
//             } else {
//                 map.get(courseId).push(learnerId)
//             }
//         }
//     }

//     return Array.from(map.entries())
//         .filter(([courseId, learners]) => learners.length == 1)
//         .map(([courseId, learners]) => [courseId, learners[0]])
// }

console.log(
    getCoursesCompleteByOneLearner({
        "Learner-0001": ["Course-0001", "Course-0002", "Course-0003"],
        "Learner-0002": ["Course-0002", "Course-0003", "Course-0004"]
    })
)