// O(n * m), with n = number of learners, m = number of questions
function getEasyQuestion(correctAnswers, userAnswers) {
    let statistics = new Array(correctAnswers.length).fill(0)

    for (let i = 0; i < userAnswers.length; i++) {
        for (let j = 0; j < correctAnswers.length; j++) {
            if (userAnswers[i][j] == correctAnswers[j]) {
                statistics[j] += 1
            }
        }
    }

    let max = 0, index = 0

    for (let i = 0; i < statistics.length; i++) {
        if (statistics[i] > max) {
            max = statistics[i]
            index = i
        }
    }

    return index
}

const index = getEasyQuestion(
    ["A", "B", "C"],
    [
        ["A", "B", "B"],
        ["C", "B", "C"],
        ["A", "B", "C"],
        ["B", "B", "A"],
        ["A", "B", "C"]
    ]
)
console.log(index)