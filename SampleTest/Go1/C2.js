function topKEasyQuestion(correctAnswers, userAnswers, k) {
    let statistics = new Array(correctAnswers.length).fill(0)

    for (let i = 0; i < userAnswers.length; i++) {
        for (let j = 0; j < correctAnswers.length; j++) {
            if (userAnswers[i][j] == correctAnswers[j]) {
                statistics[j] += 1
            }
        }
    }

    return statistics
        .map((value, index) => [value, index])
        .sort((a, b) => b[0] - a[0]).slice(0, k)
        .map((item) => item[1])
}

const output = topKEasyQuestion(
    ["A", "B", "C"],
    [
        ["A", "B", "B"],
        ["C", "B", "C"],
        ["A", "B", "C"],
        ["B", "B", "A"],
        ["A", "B", "C"]
    ],
    3
)
console.log(output)